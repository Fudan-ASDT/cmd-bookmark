import { Generator } from "@/service/generator";
import { FileUtil } from "@/util/file_util";

test("markdown serialize", () => {
  let md = Generator.makeMdFromFile("test/md/test.md");
  let md_raw = md.serialize();
  let new_md = Generator.makeMdFromContent(md_raw);
  let new_md_raw = new_md.serialize();
  expect(new_md_raw).toEqual(md_raw);
})

test("bookmark serialize", () => {
  let units = Generator.makeBookMarkFromFile("test/md/test.md");
  let units_raw = units.serialize();
  expect(units_raw.length).toBeGreaterThan(0);
});
