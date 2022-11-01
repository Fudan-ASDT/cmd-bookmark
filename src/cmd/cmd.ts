require("module-alias/register")
import { Stack } from "@/util/ds";
import { ActionTransition } from "antlr4ts/atn/ActionTransition";
import { readFileSync, unlinkSync } from "fs";
import {error_handle} from "@/error_handle/error_handle"
import {close_callback} from "@/closecallback/closecallback"
import { Markdown } from "@/model/md/element";
import {Generator} from "@/service/generator"
import { BookMark } from "@/model/bookmark/bookmark";
import { driver } from "@/driver/driver";
import { Converter } from "@/service/converter/converter";
import { Service } from "@/service/converter/antlr4/service"; 
import{FileUtil} from "@/util/file_util"
//add-title
//add-bookmark
//delete-title
//delete-bookmark
//打开一个markdown
//open "./path/to/cloud.bmk"
//save
//undo
//redo
//show-tree
//ls-tree

export namespace cmd{
   class add_title_visitor extends BookMark.unitVisitor{
      private parentDir:string;
      private childrenDir:string;
      constructor(cdir:string,pdir:string){
        super();
        this.childrenDir=cdir;
        this.parentDir=pdir;
      }
      public visit(unit: BookMark.Unit): boolean {
          if(this.parentDir==unit.data.label){
            let newdata:BookMark.UnitData=new BookMark.UnitData(unit.data.level+1,this.childrenDir,new Array<BookMark.Item>,new Object());
            let newUnit:BookMark.Unit=new BookMark.Unit(newdata,new Array<BookMark.Unit>);
            console.debug("newdata"+newdata.serialize());
            console.debug("newUnit"+newUnit.serialize());
            unit.children.push(newUnit);
            console.debug(unit.data.label+" children : ");
            console.debug(unit.children);
            return false;
          }
          return true;
      }
   }
   class delete_title_visitor extends BookMark.unitVisitor{
      dirToDelete:string;
      parentDir:string;
      constructor(dir:string,pdir:string){
        super();
        this.dirToDelete=dir;
        this.parentDir=pdir;
      }
      public visit(unit: BookMark.Unit): boolean {
        if(unit.data.label==this.parentDir){
          //delete current node and all its children
          for(let idx=0;idx<unit.children.length;idx++){
              if(unit.children[idx].data.label==this.dirToDelete){
                  unit.children.splice(idx,1);
                  console.debug(unit.children);
                  return false;
              }
          }
          return false;
        }
        return true;
      }
   }
   class delete_bookmark_visitor extends BookMark.unitVisitor{
     public visit(unit: BookMark.Unit): boolean {
        return false;
     }
   }
   
   class cd_visitor extends BookMark.unitVisitor{
    private toDir:string;
    private dv:driver;
    constructor(td:string,dv:driver){
      super();
      this.toDir=td;
      this.dv=dv;
    }
    public visit(unit: BookMark.Unit): boolean {
      if(this.toDir==this.dv.getMaster().data.label||this.toDir=="master"){
          this.dv.setUnit(this.dv.getMaster());
          console.log("current working dir : "+this.dv.getUnit().data.label);
          return false;
      }
      if(unit.data.label==this.toDir){
         this.dv.setWorkDir(unit);
         console.log("current working dir : "+unit.data.label);
         return false;
      }
      return true;
    }
   }

   class printTree_visitor extends BookMark.unitVisitor{
    public visit(unit: BookMark.Unit): boolean {
      let message:String="";
      for(let idx=0;idx<unit.data.level;idx++){
        message=message.concat("  ");
      }
      console.log(message+"└─"+"T."+unit.data.label);
      for(let idx=0;idx<unit.data.items.length;idx++){
          if(idx+1==unit.data.items.length){
              if(unit.data.items[idx].appendix==true)
              console.log(message+"  "+"└─"+"*L."+unit.data.items[idx].label);
              console.log(message+"  "+"└─"+"L."+unit.data.items[idx].label);
              continue;
          }
          if(unit.data.items[idx].appendix==true) 
          console.log(message+"  "+"├─"+"*L."+unit.data.items[idx].label);
          console.log(message+"  "+"├─"+"L."+unit.data.items[idx].label);
      }
      return true;
    }
   };
   
   export class CommandFactory{
          constructor(){};
          public static create(userCommand:string):Command{
            let commandName=userCommand.split(" ")[0];
            switch(commandName){
              case "add-title":return new add_title(userCommand);
              case "add-bookmark":return new add_bookmark(userCommand);
              case "delete-title":return new delete_title(userCommand);
              case "delete-bookmark":return new delete_bookmark(userCommand);
              case "open":return new open(userCommand);
              case "save":return new save(userCommand);
              case "undo":return new undo(userCommand);
              case "redo":return new redo(userCommand);
              case "show-tree":return new show_tree(userCommand);
              case "cd":return new cd(userCommand);
              case "ls-tree":return new ls_tree(userCommand);
              case "read-bookmark":return new read_bookmark(userCommand);
              case "pwd":return new pwd(userCommand);
              default:
                return null;
            }
          }
        };


  export abstract class  Command{
          protected commandName:string;
          protected _arguments:string[]=[];
          protected argumentError:boolean;
          public constructor(completeCommand:string){
            this._arguments=[];
            this.argumentError=false;
            this.parseCompleteCommand(completeCommand);
          }
          
          public parseCompleteCommand(completeCommand:string){
            console.debug("parsing command");
            var commandAndArguments=completeCommand.split(" ");
            console.debug("commandName : "+commandAndArguments[0]);
            this.commandName=commandAndArguments[0];
            commandAndArguments.splice(0, 1);
            console.debug("after splice : "+commandAndArguments);
            if(commandAndArguments.length!=0){
              let that=this;
              commandAndArguments.forEach(function(elem){
                console.debug("pushing argument "+elem);
                that._arguments.push(elem);
              });
            }
            //this.parseArguments(commandAndArguments[1]);
          }

          public action(dv:driver):void{console.debug("abstract command action");}
          public handle(dv:driver):void{
            console.debug(this.commandName+" action");
            this.action(dv);
            console.debug(this.commandName+" action end");
          }
          public push(commands:Stack<Command>):void{
            console.debug("push "+this.commandName);
            if(this.argumentError==false)
              commands.push(this);
          }
          public undo(dv:driver){};
        }

  export class add_title extends Command{
          public constructor(completeCommand:string){
            console.debug("constructing add-title");
            super(completeCommand);
            if(this._arguments.length==0){
              this.argumentError=true;
            }
          }
          public action(dv:driver): void {
              if(this._arguments.length==1){
                  if(dv.getUnit().data!=null){
                    let headData=new BookMark.UnitData(dv.getUnit().data.level+1,this._arguments[0],new Array<BookMark.Item>,new Object());
                    let head=new BookMark.Unit(headData,new Array<BookMark.Unit>);
                    dv.getUnit().children.push(head);
                  }else{
                    //md文件为空
                    let headData=new BookMark.UnitData(dv.getUnit().data.level+1,this._arguments[0],new Array<BookMark.Item>,new Object());
                    dv.getUnit().data=headData;
                  }
              }else{
                  let atv:add_title_visitor=new add_title_visitor(this._arguments[0],this._arguments[2]);
                  dv.getUnit().travel(atv);
                  //console.debug("after add-title : "+unit.serialize());
              }
          }
          public undo(dv:driver){
            if(this._arguments.length==1){
              let  del=CommandFactory.create("delete-title "+this._arguments[0]);
              del.handle(dv);
            }else{
              let del=CommandFactory.create("delete-title "+this._arguments[0]+" at "+this._arguments[2]);
              del.handle(dv);
            }
          }
        }

        class add_bookmark extends Command{
          public constructor(completeCommand:string){
            super(completeCommand);
            if(this._arguments.length==0){
              this.argumentError=true;
            }
          }
          public action(dv:driver): void {
              if(this._arguments.length==1){
                 let args=this._arguments[0].split("@");
                 let url=new URL(args[1]);
                 let link:BookMark.Item=new BookMark.Item(args[0],url,new Object());
                 console.debug("link : "+link.serialize());
                 dv.getUnit().data.items.push(link);
                 console.debug(dv.getUnit().data.items);
              }
          }
          public undo(dv: driver): void {
            let del=CommandFactory.create("delete-bookmark"+" "+this._arguments[0].split("@")[0]);
            del.handle(dv);
          }
        }

        export class delete_title extends Command{
          public constructor(completeCommand:string){
            super(completeCommand);
            if(this._arguments.length==0){
              this.argumentError=true;
            }
          }
          public action(dv:driver): void {
            if(this._arguments.length==1){
              console.debug("delete whole md");
              if(dv.getUnit().data.label==this._arguments[0]){
                console.log("can not delete working dir");
              }else{
                let that=this;
                let idx=0;
                dv.getUnit().children.forEach(function(elem:BookMark.Unit){
                    if(elem.data.label==that._arguments[0]){
                      dv.getUnit().children.splice(idx,1);
                    }
                    idx++;
                });
              }
            }else{
              let dtv=new delete_title_visitor(this._arguments[0],this._arguments[2]);
              dv.getUnit().travel(dtv);
            }
          }
          public undo(dv:driver): void {
            if(this._arguments.length==1){
              let add:Command=CommandFactory.create("add-title"+" "+this._arguments[0]);
              add.handle(dv);
            }else{
              let add:Command=CommandFactory.create("add-title "+" "+this._arguments[0]+" at "+this._arguments[2]);
              add.handle(dv);
            }
          }
        }

        export class delete_bookmark extends Command{
          public constructor(completeCommand:string){
            super(completeCommand);
            if(this._arguments.length==0){
              this.argumentError=true;
            }
          }
          public action(dv:driver): void {
            if(this._arguments.length==1){
              let idx=0;
              let that=this;
              for(let idx=0;idx<dv.getUnit().data.items.length;idx++){
                if(dv.getUnit().data.items[idx].label==that._arguments[0]){
                  that._arguments.push(dv.getUnit().data.items[idx].url.origin);
                  console.debug("delete bookmark : "+that._arguments[0]);
                  dv.getUnit().data.items.splice(idx,1);
                  return;
                }
              }
            }
          }
          public undo(dv: driver): void {
              let add=CommandFactory.create("add-bookmark"+" "+this._arguments[0]+"@"+this._arguments[1]);
              add.handle(dv);
          }
        }

        export class open extends Command{
          constructor(completeCommand:string){
            super(completeCommand);
            if(this._arguments.length==0){
              this.argumentError=true;
            }
          }
          public action(dv:driver): void {
            if(this._arguments.length==1){
              let save=cmd.CommandFactory.create("save");
              save.handle(dv);
              let workDir = Generator.makeBookMarkFromFile(this._arguments[0]);
              dv.setMaster(workDir);
              dv.setUnit(workDir);
              while(dv.commands.length!=0)
              dv.commands.pop();
              while(dv.redoStack.length!=0)
              dv.redoStack.pop();
              dv.setFiliDir(this._arguments[0]);
              dv.getUnit().data.items.forEach(function(elem:BookMark.Item){
                elem.appendix=new Object();
              });
              console.log("open : "+dv.getUnit().data.label+" success");
            }
          }
          public push(commands:Stack<Command>):void{

          }
        }

        export class save extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(dv:driver): void {
            dv.getUnit().data.items.forEach(function(elem:BookMark.Item){
                elem.appendix=new Object();
            });
            let converter: Converter<Markdown.MarkdownDoc, BookMark.Unit> = new Service();
            let md=converter.fromDst(dv.getMaster());
            FileUtil.writeFile(dv.getFileDir(),md);
          }
          public push(commands:Stack<Command>):void{
            
          }
        }

        export class redo extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(dv:driver): void {
            //console.debug("redo")
            if(dv.redoStack.length!=0){
                let command=dv.redoStack.pop();
                if(command!=undefined){
                  dv.commands.push(command);
                  command.handle(dv);
                }
            }
          }
          public push(commands:Stack<Command>):void{

          }
          public undo(dv:driver): void {
          }
        }

        export class undo extends Command{

          public constructor(commandName:string){
            super(commandName);
          }
          public action(dv:driver): void {
              if(dv.commands.length!=0){
                let command:cmd.Command=dv.commands.pop();
                if(command!=undefined){
                  dv.redoStack.push(command);
                  command.undo(dv);
                }
              }
          }
          public push(commands:Stack<Command>):void{
          }
          public undo(dv:driver): void {
          }
        }

        export class show_tree extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(dv:driver): void {
            let visitor=new printTree_visitor();
            dv.getUnit().travel(visitor);
          }
          public push(commands:Stack<Command>):void{
            
          }
        }
        export class cd extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(dv:driver): void {
             let visitor=new cd_visitor(this._arguments[0],dv);
             dv.getUnit().travel(visitor);
             while(dv.commands.length!=0)
             dv.commands.pop();
             while(dv.redoStack.length!=0)
             dv.redoStack.pop();
          }
          public push(commands:Stack<Command>):void{
            
          }
        }
        export class ls_tree extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(dv:driver): void {
             let visitor=new printTree_visitor();
             dv.getMaster().travel(visitor);
          }
          public push(commands:Stack<Command>):void{
            
          }
        }
        export class read_bookmark extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(dv:driver): void {
             if(this._arguments.length==1){
                for(let idx=0;idx<this._arguments.length;idx++){
                  if(dv.getUnit().data.items[idx].label==this._arguments[0]){
                      dv.getUnit().data.items[idx].appendix=true;
                      console.log("visit : "+dv.getUnit().data.items[idx].url.origin);
                  }
                }
             }
          }
          public push(commands:Stack<Command>):void{
            
          }
        }
        export class pwd extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(dv:driver): void {
             console.log("work directory : "+dv.getUnit().data.label);
          }
          public push(commands:Stack<Command>):void{
            
          }
        }

}//end of namespace cmd


