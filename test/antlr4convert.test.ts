import { BookMark } from "@/model/bookmark/bookmark";
import { Markdown } from "@/model/md/element";
import { Service } from "@/service/converter/antlr4/service";
import { Converter } from "@/service/converter/converter";
import { Generator } from "@/service/generator";

test("markdown -> bookmark", () => {
  let elems = Generator.makeMdFromFile("test/md/test.md");
  let converter: Converter<Markdown.MarkdownDoc, BookMark.Unit> = new Service();

  let units = converter.fromSrc(elems);
  // console.log(units);
  let new_elems = converter.fromDst(units);
  // console.log(new_elems)

  expect(new_elems.toString()).toBe(elems.toString());
});
