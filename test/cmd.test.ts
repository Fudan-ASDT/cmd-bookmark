import { cmd } from '@/cmd/cmd';
import{BookMark} from '@/model/bookmark/bookmark'
import{driver} from '@/driver/driver'
import{Stack} from '@/util/ds'
import {Generator} from '@/service/generator'
function setupdv(){
  let data=new BookMark.UnitData(1,"test-unit",new Array<BookMark.Item>,null);
  let unit:BookMark.Unit=new BookMark.Unit(data,new Array<BookMark.Unit>);
  let dv=new driver();
  dv.setMaster(unit);
  dv.setUnit(unit);
  return dv;
}


test("cmd add-title", () => {
  let dv=setupdv();
  let add_titlle=cmd.CommandFactory.create("add-title"+" "+"666");
  add_titlle.handle(dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
})
test("cmd delete-title", () => {
  let dv=setupdv();
  let add_titlle=cmd.CommandFactory.create("add-title"+" "+"666");
  add_titlle.handle(dv);
  let delete_titlle=cmd.CommandFactory.create("delete-title"+" "+"test-unit");
  delete_titlle.handle(dv);
  expect(dv.getUnit().data.label).toEqual("test-unit");
  let delete_titlle2=cmd.CommandFactory.create("delete-title"+" "+"666");
  delete_titlle2.handle(dv);
  expect(dv.getUnit().children.length).toEqual(0);
})
test("cmd undo redo", () => {
  let dv=setupdv();
  let add_titlle=cmd.CommandFactory.create("add-title"+" "+"666");
  add_titlle.handle(dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
  dv.commands.push(add_titlle);
  let undo=cmd.CommandFactory.create("undo");
  undo.handle(dv);
  expect(dv.getUnit().children.length).toEqual(0);
  let redo=cmd.CommandFactory.create("redo");
  redo.handle(dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
  let add_bookmark=cmd.CommandFactory.create("add-bookmark"+" "+"666@https://www.baidu.com");
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
  let dv=setupdv();
  let add_bookmark=cmd.CommandFactory.create("add-bookmark"+" "+"666@https://www.baidu.com");
  add_bookmark.handle(dv);
  expect(dv.getUnit().data.items[0].label).toEqual("666");
  expect(dv.getUnit().data.items[0].url.origin).toEqual("https://www.baidu.com");
  let delete_bookmark=cmd.CommandFactory.create("delete-bookmark"+" "+"666");
  delete_bookmark.handle(dv);
  expect(dv.getUnit().data.items.length).toEqual(0);
})

test("cmd cd", () => {
  let dv=setupdv();
  let add_titlle=cmd.CommandFactory.create("add-title"+" "+"666");
  add_titlle.handle(dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
  let cd=cmd.CommandFactory.create("cd"+" "+"666");
  cd.handle(dv);
  expect(dv.getUnit().data.label).toEqual("666");
  let cd_master=cmd.CommandFactory.create("cd"+" "+"master");
  cd_master.handle(dv);
  expect(dv.getUnit().data.label).toEqual("test-unit");
})


test("cmd save", () => {
  let dv=new driver();
  let unit = Generator.makeBookMarkFromFile("test/md/testForCommandSave.md");
  dv.setMaster(unit);
  dv.setFiliDir("test/md/testForCommandSave.md");
  dv.setUnit(unit);
  let add_titlle=cmd.CommandFactory.create("add-title"+" "+"666");
  add_titlle.handle(dv);
  let add_bookmark=cmd.CommandFactory.create("add-bookmark"+" "+"777@https://www.baidu.com");
  add_bookmark.handle(dv);
  expect(dv.getUnit().data.items[dv.getUnit().data.items.length-1].label).toEqual("777");
  expect(dv.getUnit().children[dv.getUnit().children.length-1].data.label).toEqual("666");
  let save=cmd.CommandFactory.create("save");
  save.handle(dv);
  let afterSaveUnit = Generator.makeBookMarkFromFile("test/md/testForCommandSave.md");
  expect(unit).toEqual(afterSaveUnit);
})

class testDriver extends driver{
  protected mock(){
    let result=new Array();
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
  let dv=new testDriver;
  let cmds=dv.run("test");
  let realCmds=new Array();
  realCmds.push(cmd.CommandFactory.create("add-title 666"));
  realCmds.push(cmd.CommandFactory.create("delete-title 666"));
  realCmds.push(cmd.CommandFactory.create("add-bookmark 666@https://fanyi.baidu.com/"));
  realCmds.push(cmd.CommandFactory.create("delete-bookmark 666@https://fanyi.baidu.com/"));
  realCmds.push(cmd.CommandFactory.create("undo"));
  realCmds.push(cmd.CommandFactory.create("redo"));
  realCmds.push(cmd.CommandFactory.create("quit"));
  expect(cmds).toEqual(realCmds);
})
