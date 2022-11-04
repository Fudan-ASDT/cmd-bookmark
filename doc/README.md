# Lab1: Bookmark maintainer

## 一、书签面向对象模型

项目中对书签的面向对象模型抽象总共分为两层，第一层为 **对 Markdown 语法的抽象**，第二层为 **对书签概念的抽象**。

* 借助第一层抽象，项目的面向对象模型有了对更多 Markdown 语法提供支持的能力（如，未来可能使用 "\!\[xxx\]\(xxx\)" 来表示其他种类书签）。
* 借助第二层抽象，项目的面向对象模型不再依赖于 Markdown 语法，此后可以换用 XML、json、yaml、二进制流等其他格式作为存储方案。

### 1. Markdown 抽象

#### i. 类结构

由于磁盘中格式为 Markdown，且在题目中给出了：

```markdown
# 个⼈收藏
## 课程
[elearning](https://elearning.fudan.edu.cn/courses)
## 参考资料
[Markdown Guide](https://www.markdownguide.org)
### 函数式
[JFP](https://www.cambridge.org/core/journals/journal-of-functional-programming)
### ⾯向对象
## 待阅读
[Category Theory](http://www.appliedcategorytheory.org/what-is-applied-category-theory/)
```

可知 bmk 文件仅使用 title 与 link 两种 Markdown 语法，那么便可抽象 Title 与 Link 两个类。但为秉持 OO 编程思想，考虑到 Markdown 本身虽作为标记语言，可本题目要求呈现的确实树状结构，因此有理由在一定程度上 **在对 Markdown 语法的抽象上放弃适配性**，而选择与 Bookmark 格式具备更多的共同性，也就是使用类树状结构。由此，为 Title 与 Link 创造共同基类是有一定道理的：

```ts
export abstract class Element implements Serializer<string> {
  constructor(
    public appendix: Object
  ) {}

  abstract serialize(): string;
}
```

对于 Link 与 Title，只需要抽象出语法对应的部分即可：

```ts
export class Header extends Element implements Serializer<string> {
  constructor(
    public level: number,
    public content: string,
    appendix: Object
  ) { super(appendix); }

  serialize(): string {
    return `${"#".repeat(this.level)} ${this.content}`;
  }
}

export class Link extends Element implements Serializer<string> {
  constructor(
    public label: string,
    public url: string,
    appendix: Object
  ) { super(appendix); }

  serialize(): string {
    return `[${this.label}](${this.url})`;
  }
}
```

与此同时，项目对单个 Markdown 文件也做了抽象。由于先前抽象出了 Element 基类，因此可以避免使用 Title 或 Link：

```ts
export class MarkdownDoc implements Serializer<string> {
  constructor(public elems: Markdown.Element[]) {}

  serialize(): string {
    return this.elems
        .map(it => it.serialize() + "\n")
        .reduce((prev, curr) => prev + curr);
  }
}
```

#### ii. Markdown 解析

由于已知 bmk 文件格式，因此也可得 bmk 文件的推导式：

```g4
/* 忽略不重要部分 */
md : mdItem+;

mdItem: title | link  ;

title :  MD_TITLE_TAG SPACE+ string WS ;

link  :   LSBRACKET string RSBRACKET LRBRACKET url RRBRACKET WS;
```

在语法解析方面，为了 **提高项目的可扩展性**，因此选用了 **ANTLR** 进行语法解析。

ANTLR 是一种快速生成词法解析、语法解析模块的工具。项目中定义了 mdLexer 与 mdParser 两个文件，其中详细写明了 bmk 格式文件目前的语法规则。

在 ANTLR 的帮助下，只需要修改推导式文件即可增加新的 Markdown 语法特性，这大大提高了项目的可扩展性。

#### iii. 总结

Markdown 抽象仅仅是对 bmk 文件的抽象，它使项目可以专注于处理 bmk 文件，而不必考虑后续 Bookmark 的行为。

这一层抽象将十分有效地分离了 bmk 文件格式与 Bookmark 操作。

### 2. Bookmark 抽象

Bookmark 与 Markdown 本质上并无关联，可能会有许多种 Bookmark 数据管理方式，bmk 文件只是其中一种，因此项目中完全抛弃了 Markdown 相关的概念。这里我们使用 Unit 作为 Bookmark 树的节点：

```ts
 export class Unit implements Serializer<string> {
  constructor(
    public data: BookMark.UnitData,
    public children: Array<BookMark.Unit>
  ) {}

  serialize(): string {
    return this.serializeInner()
      .map(it => it + "\n")
      .reduce((prev, curr) => prev + curr);
  }
}
```

其中：

* data 代表该节点所含的一些数据。这个数据的类型为 UnitData 而非基本类型，因此 data 中具体存储哪些数据也是 **极具扩展性** 的；
* children 中存储 Unit，也就是子节点。

这种设计方式参考了函数式编程语言中常见的 “链表 / 树” 的实现方式——使用其中一个单元存储数据，另一个单元存储同类型的容器。

而对于 UnitData，目前的设计为：

```ts
export class UnitData implements Serializer<string> {
  constructor(
    public level: number,
    public label: string,
    public items: Array<BookMark.Item>,
    public appendix: Object
  ) {}

  serialize(): string {
    return this.serializeInner()
      .map(it => it + "\n")
      .reduce((prev, curr) => prev + curr);
  }
}
```

其中：

* level 代表 Unit 所处层级，此处看似 “将 Unit 的属性放入另一个类” 是一种失败的设计，其实 UnitData 就是为存储 Unit 的属性而设计的，这与 UnitData 的初衷完全一致；
* label 代表对 Unit 的文本说明。此处的 label **仅仅表示 Unit 的文本说明**，而在后续的实现中，label 等价于 Markdown 中的 Title 内容 **仅仅是因为使用 bmk 格式存储。如果使用其他格式存储，label 的语义也可以无缝转换**；
* items 表示 Unit 附属的一些对象，在 Markdown 中作为存储媒介的前提下，这表示某一 Title 下的所有 Link；
* appendix：preserve field。

而对于 Item：

```ts
export class Item implements Serializer<string> {
  constructor(
    public label: string,
    public url: URL,
    public appendix: Object
  ) {}

  serialize(): string {
    return `${this.label} :-> ${this.url} (extra: ${JSON.stringify(this.appendix)})`;
  }
}
```

其中：

* label：代表书签的文本说明，此处的 label **仅仅表示书签的文本说明**，而在后续的实现中，label 等价于 Markdown 中的 Link 中的内容 **仅仅是因为使用 bmk 格式存储。如果使用其他格式存储，label 的语义也可以无缝转换**；
* url：设计成 URL 类型是因为作为电子书签，肯定是一个 URL 格式的链接，这并不会带来兼容上的问题；
* appendix：preserved field。

## 二、设计模式与代码

### 1. Visitor

```ts
// src/service/generator
export class Generator {
  static makeMdFromContent(content: string): Markdown.MarkdownDoc {
    let inputStream = CharStreams.fromString(content);
    let lexer = new mdLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new mdParser(tokenStream);
    let tree = parser.md();
    let visitor = new ANTLR4Visitor();
    tree.accept(visitor);
    return new Markdown.MarkdownDoc(visitor.elems);
  }
}
```

```ts
// src/service/converter/antlr4/visitor
export class ANTLR4Visitor implements mdParserVisitor<void> {
  public elems: Array<Markdown.Element>;

  constructor() {
    this.elems = new Array;
  }

  visitTitle(ctx: TitleContext) {
    let level = ctx.MD_TITLE_TAG().text.length;
    let child = ctx.getChild(2) as StringContext;
    let content = child.text;
    let hdr = new Markdown.Header(level, content, new Object);
    this.elems.push(hdr);
  }
  visitLink(ctx: LinkContext) {
    let s_child = ctx.getChild(1) as StringContext;
    let label = s_child.text;
    let url_child = ctx.getChild(4);
    let url = url_child.text;
    let link = new Markdown.Link(label, url, new Object);
    this.elems.push(link);
  }

  visit(tree: ParseTree): void {}
  visitChildren(node: RuleNode): void {
    if (node instanceof MdContext || node instanceof MdItemContext) {
      node.children?.forEach(child => { child.accept(this) });
    } else if (node instanceof TitleContext) {
      this.visitTitle(node);
    } else if (node instanceof LinkContext) {
      this.visitLink(node);
    }
  }
  visitTerminal(node: TerminalNode): void {}
  visitErrorNode(node: ErrorNode): void {}
}
```

### 2. Composite

```ts
 export class Unit implements Serializer<string> {
  constructor(
    public data: BookMark.UnitData,
    public children: Array<BookMark.Unit>
  ) {}

  serialize(): string {
    return this.serializeInner()
      .map(it => it + "\n")
      .reduce((prev, curr) => prev + curr);
  }
}
```

### 3. Adapter

```ts
export class Service implements Converter<Markdown.MarkdownDoc, BookMark.Unit> {
  fromSrc(src: Markdown.MarkdownDoc): BookMark.Unit {
    let elems = src.elems;
    // ignore some code
    return level_unit_map.get(0);
  }

  fromDst(dst: BookMark.Unit): Markdown.MarkdownDoc {
    let elems = new Array<Markdown.Element>;
    // ignore some code
    return new Markdown.MarkdownDoc(elems);
  }
}
```

### 4. Command

```ts
export abstract class Command{
  protected commandName:string;
  protected _arguments:string[]=[];
  protected argumentError:boolean;
  public constructor(completeCommand:string){
    this._arguments=[];
    this.argumentError=false;
    this.parseCompleteCommand(completeCommand);
  }

  public parseCompleteCommand(completeCommand:string){}
  public action(dv:driver):void{}
  public handle(dv:driver):void{}
  public push(commands:Stack<Command>):void{}
  public undo(dv:driver){};
}

class add_bookmark extends Command{
  public constructor(completeCommand:string){
    super(completeCommand);
    if(this._arguments.length==0){
      this.argumentError=true;
    }
  }
  public action(dv:driver): void {
    if(this._arguments.length==1){
      let args=this._arguments[0].split("@");
      let url=new URL(args[1]);
      let link:BookMark.Item=new BookMark.Item(args[0],url,new Object());
      console.debug("link : "+link.serialize());
      dv.getUnit().data.items.push(link);
      console.debug(dv.getUnit().data.items);
    }
  }
  public undo(dv: driver): void {
    let del=CommandFactory.create("delete-bookmark"+" "+this._arguments[0].split("@")[0]);
    del.handle(dv);
  }
}
```

```ts
rl.on("line",function(userCommand){
  let tmp:string=userCommand;
  if(tmp.length!=0){
    console.debug("command is "+userCommand);
    if(userCommand=="quit"){
      rl.close();
    }else{
      if(userCommand!=""){
        let command=cmd.CommandFactory.create(userCommand);
        if(command!=null){
          command.push(that.commands);
          command.handle(that);
        }else{
          that.errorhandler.setErrorcode(error_handle.errorcode.illegalcommand);
          that.errorhandler.handle();
        }
      }
    }
  }
});
```

### 5. Factory

```ts
export class CommandFactory{
  constructor(){};
  public static create(userCommand:string):Command{
    let commandName=userCommand.split(" ")[0];
    switch(commandName){
      case "add-title":return new add_title(userCommand);
      case "add-bookmark":return new add_bookmark(userCommand);
      case "delete-title":return new delete_title(userCommand);
      case "delete-bookmark":return new delete_bookmark(userCommand);
      case "open":return new open(userCommand);
      case "save":return new save(userCommand);
      case "undo":return new undo(userCommand);
      case "redo":return new redo(userCommand);
      case "show-tree":return new show_tree(userCommand);
      case "cd":return new cd(userCommand);
      case "ls-tree":return new ls_tree(userCommand);
      case "read-bookmark":return new read_bookmark(userCommand);
      case "pwd":return new pwd(userCommand);
      default:
          return null;
    }
  }
};
```

### 6. Memento

```ts
export class PushableCommand extends Command {
  public push(commands: Stack<Command>): void {
    if (this.argumentError == false)
      commands.push(this);
  }
}

export class AddBookMark extends PushableCommand {
  public constructor(completeCommand: string) {
    super(completeCommand);
    if (this._arguments.length == 0) {
      this.argumentError = true;
    }
  }

  public action(dv: Driver): void {
    if (this._arguments.length == 1) {
      let args = this._arguments[0].split("@");
      let url = new URL(args[1]);
      let link: BookMark.Item = new BookMark.Item(args[0], url, new Object());
      dv.getUnit().data.items.push(link);
    }
  }
}
```

### 7. Abstract Factory

```ts
export class Component{
  public static getErrorHandler(name:string):ErrorHandle.ErrorHandler{
    switch(name){
      case "default":return new ErrorHandle.DefaultErrorHandler();break;
      default:
        break;
    }
  }

  public static getCloseCallback(name:string):CloseCallback.CloseCallback{
    switch(name){
      case "default":return new CloseCallback.DefaultCallback();break;
      default:
        break;
    }
  }

  public static getWelcome(name:string):Welcome.Welcome{
    switch(name){
      case "default":return new Welcome.DefaultWelcome();break;
      default:
        break;
    }
  }
}
```