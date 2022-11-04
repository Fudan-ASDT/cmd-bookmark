import { Cmd } from '@/cmd/cmd';
import { BookMark } from '@/model/bookmark/bookmark'
import { Driver } from '@/driver/driver'
import { Stack } from '@/util/ds'
import { Generator } from '@/service/generator'
import { CloseCallback } from "@/util/closecallback"
import { ErrorHandle } from "@/util/errorhandle"
import { MarkdownSyntaxError } from "@/util/exception"
import { Welcome } from "@/util/welcome"
function setupdv() {
  let data = new BookMark.UnitData(1, "test-unit", new Array<BookMark.Item>, null);
  let unit: BookMark.Unit = new BookMark.Unit(data, new Array<BookMark.Unit>);
  let dv = new Driver();
  dv.setMaster(unit);
  dv.setUnit(unit);
  return dv;
}


test("cmd add-title", () => {
  let dv = setupdv();
  let add_titlle = Cmd.CommandFactory.create("add-title" + " " + "666");
  add_titlle.handle(dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
  let add_titlle2 = Cmd.CommandFactory.create("add-title" + " "+"777"+" at " + "666");
  add_titlle2.handle(dv);
  expect(dv.getUnit().children[0].children[0].data.label).toEqual("777");
})
test("cmd delete-title", () => {
  let dv = setupdv();
  let add_titlle = Cmd.CommandFactory.create("add-title" + " " + "666");
  add_titlle.handle(dv);
  let delete_titlle = Cmd.CommandFactory.create("delete-title" + " " + "test-unit");
  delete_titlle.handle(dv);
  expect(dv.getUnit().data.label).toEqual("test-unit");
  let delete_titlle2 = Cmd.CommandFactory.create("delete-title" + " " + "666");
  delete_titlle2.handle(dv);
  expect(dv.getUnit().children.length).toEqual(0);
  let add_titlle2 = Cmd.CommandFactory.create("add-title" + " " + "666");
  add_titlle2.handle(dv);
  let delete_titlle3 = Cmd.CommandFactory.create("delete-title"+" "+"666"+" at "+"test-unit");
  delete_titlle3.handle(dv);
  expect(dv.getUnit().children.length).toEqual(0);
})
test("cmd undo redo", () => {
  let dv = setupdv();
  let add_titlle = Cmd.CommandFactory.create("add-title" + " " + "666");
  add_titlle.handle(dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
  dv.commands.push(add_titlle);
  let undo = Cmd.CommandFactory.create("undo");
  undo.handle(dv);
  expect(dv.getUnit().children.length).toEqual(0);
  let redo = Cmd.CommandFactory.create("redo");
  redo.handle(dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
  let add_bookmark = Cmd.CommandFactory.create("add-bookmark" + " " + "666@https://www.baidu.com");
  add_bookmark.handle(dv);
  expect(dv.getUnit().data.items[0].label).toEqual("666");
  dv.commands.push(add_bookmark);
  undo.handle(dv);
  expect(dv.getUnit().data.items.length).toEqual(0);
  redo.handle(dv);
  expect(dv.getUnit().data.items[0].label).toEqual("666");
  expect(dv.getUnit().data.items[0].url.origin).toEqual("https://www.baidu.com");
})

test("cmd add-bookmark delete-bookmark", () => {
  let dv = setupdv();
  let add_bookmark = Cmd.CommandFactory.create("add-bookmark" + " " + "666@https://www.baidu.com");
  add_bookmark.handle(dv);
  expect(dv.getUnit().data.items[0].label).toEqual("666");
  expect(dv.getUnit().data.items[0].url.origin).toEqual("https://www.baidu.com");
  let delete_bookmark = Cmd.CommandFactory.create("delete-bookmark" + " " + "666");
  delete_bookmark.handle(dv);
  expect(dv.getUnit().data.items.length).toEqual(0);
})

test("cmd cd", () => {
  let dv = setupdv();
  let add_titlle = Cmd.CommandFactory.create("add-title" + " " + "666");
  add_titlle.handle(dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
  let cd = Cmd.CommandFactory.create("cd" + " " + "666");
  cd.handle(dv);
  expect(dv.getUnit().data.label).toEqual("666");
  let cd_master = Cmd.CommandFactory.create("cd" + " " + "master");
  cd_master.handle(dv);
  expect(dv.getUnit().data.label).toEqual("test-unit");
})


test("cmd save", () => {
  let dv = new Driver();
  let unit = Generator.makeBookMarkFromFile("test/md/testForCommandSave.md");
  dv.setMaster(unit);
  dv.setFiliDir("test/md/testForCommandSave.md");
  dv.setUnit(unit);
  let add_titlle = Cmd.CommandFactory.create("add-title" + " " + "666");
  add_titlle.handle(dv);
  let add_bookmark = Cmd.CommandFactory.create("add-bookmark" + " " + "777@https://www.baidu.com");
  add_bookmark.handle(dv);
  expect(dv.getUnit().data.items[dv.getUnit().data.items.length - 1].label).toEqual("777");
  expect(dv.getUnit().children[dv.getUnit().children.length - 1].data.label).toEqual("666");
  let save = Cmd.CommandFactory.create("save");
  save.handle(dv);
  let afterSaveUnit = Generator.makeBookMarkFromFile("test/md/testForCommandSave.md");
  expect(unit).toEqual(afterSaveUnit);
})




test("cmd read-bookmark", () => {
  let dv = setupdv();
  let add_bookmark = Cmd.CommandFactory.create("add-bookmark" + " " + "666@https://www.baidu.com");
  add_bookmark.handle(dv);
  expect(dv.getUnit().data.items[0].label).toEqual("666");
  let read = Cmd.CommandFactory.create("read-bookmark" + " " + "666");
  read.handle(dv);
  expect(dv.getUnit().data.items[0].appendix).toEqual(true);
})




class TestDriver extends Driver {
  protected mock() {
    let result = new Array();
    result.push("add-title 666");
    result.push("delete-title 666");
    result.push("add-bookmark 666@https://fanyi.baidu.com/");
    result.push("delete-bookmark 666@https://fanyi.baidu.com/");
    result.push("undo");
    result.push("redo");
    result.push("quit");
    return result;
  }
}


test("driver", () => {
  let dv = new TestDriver;
  let cmds = dv.run("test");
  let realCmds = new Array();
  realCmds.push(Cmd.CommandFactory.create("add-title 666"));
  realCmds.push(Cmd.CommandFactory.create("delete-title 666"));
  realCmds.push(Cmd.CommandFactory.create("add-bookmark 666@https://fanyi.baidu.com/"));
  realCmds.push(Cmd.CommandFactory.create("delete-bookmark 666@https://fanyi.baidu.com/"));
  realCmds.push(Cmd.CommandFactory.create("undo"));
  realCmds.push(Cmd.CommandFactory.create("redo"));
  realCmds.push(Cmd.CommandFactory.create("quit"));
  expect(cmds).toEqual(realCmds);
})



test("errorhandle", () => {
  let eh=new ErrorHandle.DefaultErrorHandler();
  eh.setErrorcode(ErrorHandle.errorcode.illegalcommand);
  eh.handle();
})

test("exception", () => {
  let e=new MarkdownSyntaxError("666");
})

test("welcome", () => {
  let e=new Welcome.DefaultWelcome();
  e.sayhi();
})