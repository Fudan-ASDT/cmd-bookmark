import { MdContext, MdItemContext, TitleContext, LinkContext, StringContext } from "@/grammar/mdParser";
import { mdParserVisitor } from "@/grammar/mdParserVisitor";
import { Markdown } from "@/model/md/element";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

/**
 * ANTLR4 tree => Array<Markdown.Element>
 */
export class ANTLR4Visitor implements mdParserVisitor<void> {
  public elems: Array<Markdown.Element>;

  constructor() {
    this.elems = new Array;
  }

  visitTitle(ctx: TitleContext) {
    let level = ctx.MD_TITLE_TAG.length;
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
