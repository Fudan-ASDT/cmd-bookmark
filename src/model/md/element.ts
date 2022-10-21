import { Serializer } from "@/service/serializer";

export namespace Markdown {
  export class MarkdownDoc implements Serializer<string> {
    constructor(public elems: Markdown.Element[]) {}

    serialize(): string {
      return this.elems
        .map(it => it.serialize() + "\n")
        .reduce((prev, curr) => prev + curr);
    }
  }

  export abstract class Element implements Serializer<string> {
    constructor(
      public appendix: Object
    ) {}

    abstract serialize(): string;
  }

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
}//end of namespace markdown
