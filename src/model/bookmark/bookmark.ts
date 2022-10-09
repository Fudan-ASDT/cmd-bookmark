export namespace BookMark {
  export class Item {
    constructor(
      public label: string,
      public url: URL,
      public appendix: Object
    ) {}
  }

  /**
   * composite pattern
   */
  export class Unit {
    constructor(
      public data: BookMark.UnitData,
      public children: Array<BookMark.Unit>
    ) {}
  }

  export class UnitData {
    constructor(
      public level: number,
      public label: string,
      public items: Array<BookMark.Item>,
      public appendix: Object
    ) {}
  }
}
