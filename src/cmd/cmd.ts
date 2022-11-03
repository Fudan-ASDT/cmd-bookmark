require("module-alias/register")
import { Stack } from "@/util/ds";
import { ActionTransition } from "antlr4ts/atn/ActionTransition";
import { readFileSync, unlinkSync } from "fs";
import { ErrorHandle } from "@/errorhandle/errorhandle"
import { CloseCallback } from "@/closecallback/closecallback"
import { Markdown } from "@/model/md/element";
import { Generator } from "@/service/generator"
import { BookMark } from "@/model/bookmark/bookmark";
import { Driver } from "@/driver/driver";
import { Converter } from "@/service/converter/converter";
import { Service } from "@/service/converter/antlr4/service";
import { FileUtil } from "@/util/file_util"
import { CmdVisitor } from "@/cmdvisitor/cmdvisitor";
import { Welcome } from "@/welcome/welcome";

export namespace Cmd {
  export class CommandFactory {

    constructor() { };
    public static create(userCommand: string): Command {
      let commandName = userCommand.split(" ")[0];
      switch (commandName) {
        case "add-title": return new AddTitle(userCommand);
        case "add-bookmark": return new AddBookMark(userCommand);
        case "delete-title": return new DeleteTitle(userCommand);
        case "delete-bookmark": return new DeleteBookMark(userCommand);
        case "open": return new Open(userCommand);
        case "save": return new Save(userCommand);
        case "undo": return new Undo(userCommand);
        case "redo": return new Redo(userCommand);
        case "show-tree": return new ShowTree(userCommand);
        case "cd": return new Cd(userCommand);
        case "ls-tree": return new LsTree(userCommand);
        case "read-bookmark": return new ReadBookMark(userCommand);
        case "pwd": return new Pwd(userCommand);
        default:
          return null;
      }
    }
  };

  //do not use command like ... ad ...
  //if you  want to delete or add something
  //cd to corresponding directory
  export abstract class Command {
    protected commandName: string;
    protected _arguments: string[] = [];
    protected argumentError: boolean;
    protected completeCommand:string;

    public constructor(completeCommand: string) {
      this._arguments = [];
      this.argumentError = false;
      this.parseCompleteCommand(completeCommand);
      this.completeCommand=completeCommand;
    }

    public getArgs() {
      return this._arguments;
    }

    public copy(){
      return CommandFactory.create(this.completeCommand);
    }

    //parse command,load commandname and args
    public parseCompleteCommand(completeCommand: string) {
      var commandAndArguments = completeCommand.split(" ");
      this.commandName = commandAndArguments[0];
      commandAndArguments.splice(0, 1);
      if (commandAndArguments.length != 0) {
        let that = this;
        commandAndArguments.forEach(function (elem) {
          that._arguments.push(elem);
        });
      }
      //this.parseArguments(commandAndArguments[1]);
    }

    public action(dv: Driver): void { console.debug("abstract command action"); }

    public handle(dv: Driver): void {
      //preprocess
      this.action(dv);
      //postprocess
    }
    /**for commands like add-title,delele-title...
     * need to be push into stack should  override
     * this method.
     */
    public push(commands: Stack<Command>): void { }
    /**for command can be undo redo,should override
     * this method
     */
    public undo(dv: Driver) { };
  }

  //base class for pushable command，.e.g add-title,delete-title...
  export class PushableCommand extends Command {
    public push(commands: Stack<Command>): void {
      if (this.argumentError == false)
        commands.push(this);
    }
  }

  export class AddTitle extends PushableCommand {
    public constructor(completeCommand: string) {
      super(completeCommand);
      if (this._arguments.length == 0) {
        this.argumentError = true;
      }
    }

    public action(dv: Driver): void {
      if (this._arguments.length == 1) {
        if (dv.getUnit().data != null) {
          let headData = new BookMark.UnitData(dv.getUnit().data.level + 1, this._arguments[0], new Array<BookMark.Item>, new Object());
          let head = new BookMark.Unit(headData, new Array<BookMark.Unit>);
          dv.getUnit().children.push(head);
        } else {
          //empty markdown
          let headData = new BookMark.UnitData(dv.getUnit().data.level + 1, this._arguments[0], new Array<BookMark.Item>, new Object());
          dv.getUnit().data = headData;
        }
      } else {
        let atv = new CmdVisitor.AddTitleVisitor(this._arguments[0], this._arguments[2]);
        dv.getUnit().travel(atv);
      }
    }

    public undo(dv: Driver) {
      if (this._arguments.length == 1) {
        let del = CommandFactory.create("delete-title " + this._arguments[0]);
        del.handle(dv);
      } else {
        let del = CommandFactory.create("delete-title " + this._arguments[0] + " at " + this._arguments[2]);
        del.handle(dv);
      }
    }
  }

  export class AddBookMark extends PushableCommand {
    public constructor(completeCommand: string) {
      super(completeCommand);
      if (this._arguments.length == 0) {
        this.argumentError = true;
      }
    }

    public action(dv: Driver): void {
      if (this._arguments.length == 1) {
        let args = this._arguments[0].split("@");
        let url = new URL(args[1]);
        let link: BookMark.Item = new BookMark.Item(args[0], url, new Object());
        dv.getUnit().data.items.push(link);
      }
    }

    public undo(dv: Driver): void {
      let del = CommandFactory.create("delete-bookmark" + " " + this._arguments[0].split("@")[0]);
      del.handle(dv);
    }
  }


  export class DeleteTitle extends PushableCommand {
    public restoreCommands: Array<Command> = new Array<Command>;

    public constructor(completeCommand: string) {
      super(completeCommand);
      if (this._arguments.length == 0) {
        this.argumentError = true;
      }
    }

    public action(dv: Driver): void {
      if (this._arguments.length == 1) {
        if (dv.getUnit().data.label == this._arguments[0]) {
          console.log("can not delete working dir");
        } else {
          let that = this;
          let idx = 0;
          dv.getUnit().children.forEach(function (elem: BookMark.Unit) {
            if (elem.data.label == that._arguments[0]) {
              let wl = new Array<BookMark.Unit>();
              wl.push(elem);
              while (wl.length != 0) {
                let current: BookMark.Unit = wl[0];
                let addtitle: Command = CommandFactory.create("add-title" + " " + current.data.label);
                that.restoreCommands.push(addtitle);
                wl.splice(0, 1);
                for (let idx = 0; idx < current.data.items.length; idx++) {
                  if(idx==0){
                    let cd = Cmd.CommandFactory.create("cd" + " " + current.data.label);
                    that.restoreCommands.push(cd);
                  }
                  let addbookmark: Command = CommandFactory.create("add-bookmark" + " " + current.data.items[idx].label + "@" + current.data.items[idx].url.origin);
                  that.restoreCommands.push(addbookmark);
                }
                for (let idx = 0; idx < current.children.length; idx++) {
                  if (idx == 0) {
                    let cd = Cmd.CommandFactory.create("cd" + " " + current.data.label);
                    that.restoreCommands.push(cd);
                  }
                  wl.push(current.children[idx]);
                }
              }
              dv.getUnit().children.splice(idx, 1);
            }
            idx++;
          });
        }
      } else {
        let dtv = new CmdVisitor.DeleteTitleVisitor(this._arguments[0], this._arguments[2]);
        dv.getUnit().travel(dtv);
      }
    }

    public foo(cmds:Command[],s:Stack<Command>){
      for(let idx=0;idx<s.length;idx++){
        let command=s.get(idx);
        if(command!=undefined)
        cmds.push(command.copy());
      }
    };
    public undo(dv: Driver): void {
      let currentDir = dv.getUnit();
      let content1:Command[]=new Array(1024);
      let content2:Command[]=new Array(1024);
      this.foo(content1,dv.commands);
      this.foo(content2,dv.redoStack);
      if (this._arguments.length == 1) {
        while (this.restoreCommands.length != 0) {
          let command = this.restoreCommands[0];
          this.restoreCommands.splice(0, 1);
          command.handle(dv);
        }
        let cd=Cmd.CommandFactory.create("cd"+" "+currentDir.data.label);
        cd.handle(dv);
        dv.commands=new Stack<Command>(content1);
        dv.redoStack=new Stack<Command>(content2);
      } else {
        let add: Command = CommandFactory.create("add-title" + " " + this._arguments[0] + " at " + this._arguments[2]);
        add.handle(dv);
      }
    }
  }


  export class DeleteBookMark extends PushableCommand {
    public constructor(completeCommand: string) {
      super(completeCommand);
      if (this._arguments.length == 0) {
        this.argumentError = true;
      }
    }


    public action(dv: Driver): void {
      if (this._arguments.length == 1) {
        let idx = 0;
        let that = this;
        for (let idx = 0; idx < dv.getUnit().data.items.length; idx++) {
          if (dv.getUnit().data.items[idx].label == that._arguments[0]) {
            that._arguments.push(dv.getUnit().data.items[idx].url.origin);
            dv.getUnit().data.items.splice(idx, 1);
            return;
          }
        }
      }
    }

    public undo(dv: Driver): void {
      let add = CommandFactory.create("add-bookmark" + " " + this._arguments[0] + "@" + this._arguments[1]);
      add.handle(dv);
    }
  }


  export class Open extends Command {
    constructor(completeCommand: string) {
      super(completeCommand);
      if (this._arguments.length == 0) {
        this.argumentError = true;
      }
    }

    public action(dv: Driver): void {
      if (this._arguments.length == 1) {
        let save = Cmd.CommandFactory.create("save");
        save.handle(dv);
        let workDir = Generator.makeBookMarkFromFile(this._arguments[0]);
        dv.setMaster(workDir);
        dv.setUnit(workDir);
        while (dv.commands.length != 0)
          dv.commands.pop();
        while (dv.redoStack.length != 0)
          dv.redoStack.pop();
        dv.setFiliDir(this._arguments[0]);
        dv.getUnit().data.items.forEach(function (elem: BookMark.Item) {
          elem.appendix = new Object();
        });
        console.log("open : " + dv.getUnit().data.label + " success");
      }
    }
  }


  export class Save extends Command {
    public constructor(commandName: string) {
      super(commandName);
    }

    public action(dv: Driver): void {
      dv.getUnit().data.items.forEach(function (elem: BookMark.Item) {
        elem.appendix = new Object();
      });
      let converter: Converter<Markdown.MarkdownDoc, BookMark.Unit> = new Service();
      let md = converter.fromDst(dv.getMaster());
      FileUtil.writeFile(dv.getFileDir(), md);
    }
  }


  export class Redo extends Command {
    public constructor(commandName: string) {
      super(commandName);
    }

    public action(dv: Driver): void {
      if (dv.redoStack.length != 0) {
        let command = dv.redoStack.pop();
        if (command != undefined) {
          dv.commands.push(command);
          command.handle(dv);
        }
      }
    }
  }


  export class Undo extends Command {
    public constructor(commandName: string) {
      super(commandName);
    }

    public action(dv: Driver): void {
      if (dv.commands.length != 0) {
        let command: Cmd.Command = dv.commands.top();
        if (command != undefined) {
          dv.redoStack.push(command);
          command.undo(dv);
          dv.commands.pop();
        }
      }
    }
  }


  export class ShowTree extends Command {
    public constructor(commandName: string) {
      super(commandName);
    }

    public action(dv: Driver): void {
      let visitor = new CmdVisitor.PrintTreeVisitor();
      dv.getUnit().travel(visitor);
    }
  }
  export class Cd extends Command {
    public constructor(commandName: string) {
      super(commandName);
    }

    public action(dv: Driver): void {
      let visitor = new CmdVisitor.CdVisitor(this._arguments[0], dv);
      dv.getUnit().travel(visitor);
      while (dv.commands.length != 0)
        dv.commands.pop();
      while (dv.redoStack.length != 0)
        dv.redoStack.pop();
    }
  }
  export class LsTree extends Command {
    public constructor(commandName: string) {
      super(commandName);
    }
    
    public action(dv: Driver): void {
      let visitor = new CmdVisitor.PrintTreeVisitor();
      dv.getMaster().travel(visitor);
    }
  }


  export class ReadBookMark extends Command {
    public constructor(commandName: string) {
      super(commandName);
    }

    public action(dv: Driver): void {
      if (this._arguments.length == 1) {
        for (let idx = 0; idx < this._arguments.length; idx++) {
          if (dv.getUnit().data.items[idx].label == this._arguments[0]) {
            dv.getUnit().data.items[idx].appendix = true;
            console.log("visit : " + dv.getUnit().data.items[idx].url.origin);
          }
        }
      }
    }
  }


  export class Pwd extends Command {
    public constructor(commandName: string) {
      super(commandName);
    }

    public action(dv: Driver): void {
      console.log("work directory : " + dv.getUnit().data.label);
    }
  }

}//end of namespace cmd


