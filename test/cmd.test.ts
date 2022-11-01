import { cmd } from '@/cmd/cmd';
import{BookMark} from '@/model/bookmark/bookmark'
import{driver} from '@/driver/driver'
import{Stack} from '@/util/ds'

function setupdv(){
  let data=new BookMark.UnitData(1,"test-unit",new Array<BookMark.Item>,null);
  let unit:BookMark.Unit=new BookMark.Unit(data,new Array<BookMark.Unit>);
  let dv=new driver();
  dv.setMaster(unit);
  dv.setUnit(unit);
  return dv;
}

function setupcommands(){
  let container:cmd.Command[]=new Array(1024);
  let commands:Stack<cmd.Command>=new Stack(container);
  return commands;
}

function setupredo(){
  let redoContainer:cmd.Command[]=new Array(1024);
  let redoStack:Stack<cmd.Command>=new Stack(redoContainer);
  return redoStack;
}

test("cmd add-title", () => {
  let dv=setupdv();
  let commands=setupcommands();
  let redoStack=setupredo();
  let add_titlle=cmd.CommandFactory.create("add-title"+" "+"666");
  add_titlle.handle(commands,redoStack,dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
})
test("cmd delete-title", () => {
  let dv=setupdv();
  let commands=setupcommands();
  let redoStack=setupredo();
  let add_titlle=cmd.CommandFactory.create("add-title"+" "+"666");
  add_titlle.handle(commands,redoStack,dv);
  let delete_titlle=cmd.CommandFactory.create("delete-title"+" "+"test-unit");
  delete_titlle.handle(commands,redoStack,dv);
  expect(dv.getUnit().data.label).toEqual("test-unit");
  let delete_titlle2=cmd.CommandFactory.create("delete-title"+" "+"666");
  delete_titlle2.handle(commands,redoStack,dv);
  expect(dv.getUnit().children.length).toEqual(0);
})
test("cmd undo redo", () => {
  let dv=setupdv();
  let commands=setupcommands();
  let redoStack=setupredo();
  let add_titlle=cmd.CommandFactory.create("add-title"+" "+"666");
  add_titlle.handle(commands,redoStack,dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
  commands.push(add_titlle);
  let undo=cmd.CommandFactory.create("undo");
  undo.handle(commands,redoStack,dv);
  expect(dv.getUnit().children.length).toEqual(0);
  let redo=cmd.CommandFactory.create("redo");
  redo.handle(commands,redoStack,dv);
  expect(dv.getUnit().children[0].data.label).toEqual("666");
  let add_bookmark=cmd.CommandFactory.create("add-bookmark"+" "+"666@https://www.baidu.com");
  add_bookmark.handle(commands,redoStack,dv);
  expect(dv.getUnit().data.items[0].label).toEqual("666");
  commands.push(add_bookmark);
  undo.handle(commands,redoStack,dv);
  expect(dv.getUnit().data.items.length).toEqual(0);
  redo.handle(commands,redoStack,dv);
  expect(dv.getUnit().data.items[0].label).toEqual("666");
  expect(dv.getUnit().data.items[0].url.origin).toEqual("https://www.baidu.com");
})

test("cmd add-bookmark delete-bookmark", () => {
  let dv=setupdv();
  let commands=setupcommands();
  let redoStack=setupredo();
  let add_bookmark=cmd.CommandFactory.create("add-bookmark"+" "+"666@https://www.baidu.com");
  add_bookmark.handle(commands,redoStack,dv);
  expect(dv.getUnit().data.items[0].label).toEqual("666");
  expect(dv.getUnit().data.items[0].url.origin).toEqual("https://www.baidu.com");
  let delete_bookmark=cmd.CommandFactory.create("delete-bookmark"+" "+"666");
  delete_bookmark.handle(commands,redoStack,dv);
  expect(dv.getUnit().data.items.length).toEqual(0);
})