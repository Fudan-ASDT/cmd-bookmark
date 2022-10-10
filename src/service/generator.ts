import { mdLexer } from "@/grammar/mdLexer";
import { mdParser } from "@/grammar/mdParser";
import { BookMark } from "@/model/bookmark/bookmark";
import { Markdown } from "@/model/md/element";
import { FileUtil } from "@/util/file_util";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { Service } from "./converter/antlr4/service";
import { ANTLR4Visitor } from "./converter/antlr4/visitor";

export class Generator {
  static makeMdFromFile(file_path: string): Markdown.MarkdownDoc {
    let content = FileUtil.readFile(file_path);
    return this.makeMdFromContent(content);
  }

  static makeBookMarkFromFile(file_path: string): BookMark.Unit {
    let elems = this.makeMdFromFile(file_path);
    let converter = new Service();
    return converter.fromSrc(elems);
  }

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

  static makeBookMarkFromContent(content: string): BookMark.Unit {
    let elems = this.makeMdFromContent(content);
    let converter = new Service();
    return converter.fromSrc(elems);
  }
}
