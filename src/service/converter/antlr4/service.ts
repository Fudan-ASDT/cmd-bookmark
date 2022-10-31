import { BookMark } from "@/model/bookmark/bookmark";
import { Markdown } from "@/model/md/element";
import { Stack } from "@/util/ds";
import { Converter } from "../converter";
import { MarkdownSyntaxError } from "@/util/exception";

export class Service implements Converter<Markdown.MarkdownDoc, BookMark.Unit> {
  constructor() {
  }

  fromSrc(src: Markdown.MarkdownDoc): BookMark.Unit {
    let elems = src.elems;
    if (elems.length == 0 && elems[0] !instanceof Markdown.Header) {
      throw new MarkdownSyntaxError("No content in bmk file");
    }

    // init level_unit_map, push the first element to stack
    let first_elem = elems[0] as Markdown.Header;
    let first_data = new BookMark.UnitData(first_elem.level, first_elem.content, new Array, first_elem.appendix);
    let first_unit = new BookMark.Unit(first_data, new Array);
    let level_unit_map = new Stack<BookMark.Unit>([first_unit]);

    elems.slice(1).forEach(elem => {
      console.log(elem);
      if (level_unit_map.length == 0) {
        throw new MarkdownSyntaxError("Unexpected error: empty bmk file");
      }
      if (elem instanceof Markdown.Header) {
        if (elem.level > level_unit_map.length + 1) {
          throw new MarkdownSyntaxError("Heading levels should only increment by one level at a time");
        } else {
          if (elem.level <= level_unit_map.length) {
            do { level_unit_map.pop() } while (level_unit_map.length >= elem.level);
          }
          let data = new BookMark.UnitData(elem.level, elem.content, new Array, elem.appendix);
          let unit = new BookMark.Unit(data, new Array);

          let top_unit = level_unit_map.top();
          if (top_unit == undefined) {
            throw new MarkdownSyntaxError("Unexpected error: level <-> last unit map is empty");
          }
          top_unit.children.push(unit);
          level_unit_map.push(unit);
        }
      } else if (elem instanceof Markdown.Link) {
        // if elem is link, attach it to the top unit
        let mark = new BookMark.Item(elem.label, new URL(elem.url), elem.appendix);
        let top_unit = level_unit_map.top();
        if (top_unit == undefined) {
          throw new MarkdownSyntaxError("Unexpected error: level <-> last unit map is empty");
        }
        top_unit.data.items.push(mark);
      }
    });

    return level_unit_map.get(0);
  }

  fromDst(dst: BookMark.Unit): Markdown.MarkdownDoc {
    let elems = new Array<Markdown.Element>;
    // root Header
    let header = new Markdown.Header(dst.data.level, dst.data.label, dst.data.appendix);
    elems.push(header);
    // Links attached to Header
    dst.data.items.forEach(item => {
      let link = new Markdown.Link(item.label, item.url.toString(), item.appendix);
      elems.push(link);
    });
    // children Header
    dst.children.forEach(child => {
      let childElems = this.fromDst(child);
      elems.push(...childElems.elems);
    });
    return new Markdown.MarkdownDoc(elems);
  }


}

