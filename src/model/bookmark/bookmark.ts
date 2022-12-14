import { MdAppender, Serializer } from "@/service/serializer";
import { TAB } from "@/util/gloval";

export namespace BookMark {
  export class Item implements Serializer<string> {
    constructor(
      public label: string,
      public url: URL,
      public appendix: Object
    ) { }

    serialize(): string {
      return `${this.label} :-> ${this.url} (extra: ${JSON.stringify(this.appendix)})`;
    }
  }

  export abstract class UnitVisitor {
    constructor() { }
    public abstract visit(unit: Unit): boolean;
    //public abstract visitHeader(unit:Unit):boolean;
    //public abstract visitLink(unit:Unit):boolean;
  }

  /**
   * composite pattern
   */
  export class Unit implements Serializer<string> {
    constructor(
      public data: BookMark.UnitData,
      public children: Array<BookMark.Unit>
    ) { }
    private accept(visitor: UnitVisitor) {
      //sconsole.debug("visiting "+this.data.label);
      return visitor.visit(this);
    }
    public travel(visitor: UnitVisitor): void {
      let contin: boolean = this.accept(visitor);
      if (contin) {
        this.children.forEach(function (unit: BookMark.Unit) {
          unit.travel(visitor);
        });
      } else {
        return;
      }
    }
    serialize(): string {
      return this.serializeInner()
        .map(it => it + "\n")
        .reduce((prev, curr) => prev + curr);
    }

    /**
     * it's hard to reuse if serialize method's return type is Array<>,
     * wrap real serialize with a new abstract layer.
     * @returns an array contains links and units' metadata
     */
    serializeInner(): Array<string> {
      let data_raw = this.data.serializeInner();
      let child_raw = this.children
        .map(it => it.serializeInner().map(it => TAB + it))
        .reduce((pre, cur) => pre.concat(cur), []);
      return data_raw.concat(child_raw);
    }
  }

  export class UnitData implements Serializer<string> {
    constructor(
      public level: number,
      public label: string,
      public items: Array<BookMark.Item>,
      public appendix: Object
    ) { }

    serialize(): string {
      return this.serializeInner()
        .map(it => it + "\n")
        .reduce((prev, curr) => prev + curr);
    }

    /**
     * it's hard to reuse if serialize method's return type is Array<>,
     * wrap real serialize with a new abstract layer.
     * @returns an array contains links and units' metadata
     */
    serializeInner(): Array<string> {
      return new Array<string>(
        `|${this.label}| (extra: ${JSON.stringify(this.appendix)})`,
        ...this.items.map(it => "  *---" + it.serialize())
      );
    }
  }
}
