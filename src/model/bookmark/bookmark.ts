import { Appender, Serializer } from "@/service/serializer/interface";
import { TAB } from "@/util/gloval";

export namespace BookMark {
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

  /**
   * composite pattern
   */
  export class Unit implements Serializer<Array<string>> {
    constructor(
      public data: BookMark.UnitData,
      public children: Array<BookMark.Unit>
    ) {}

    serialize(): Array<string> {
      let data_raw = this.data.serialize();
      let child_raw = this.children
        .map(it => it.serialize().map(it => TAB + it))
        .reduce((pre, cur) => pre.concat(cur), []);
      return data_raw.concat(child_raw);
    }
  }

  export class UnitData implements Serializer<Array<string>> {
    constructor(
      public level: number,
      public label: string,
      public items: Array<BookMark.Item>,
      public appendix: Object
    ) {}

    serialize(): Array<string> {
      return new Array<string>(
        `|${this.label}| (extra: ${JSON.stringify(this.appendix)})`,
        ...this.items.map(it => "  *---" + it.serialize())
      );
    }
  }
}
