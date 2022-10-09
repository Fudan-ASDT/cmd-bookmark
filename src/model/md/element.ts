export namespace Markdown {
  export class Element {
    constructor(
      public appendix: Object
    ) {}
  }

  export class Header extends Element {
    constructor(
      public level: number,
      public content: string,
      appendix: Object
    ) { super(appendix); }
  }

  export class Link extends Element {
    constructor(
      public label: string,
      public url: string,
      appendix: Object
    ) { super(appendix); }
  }
}
