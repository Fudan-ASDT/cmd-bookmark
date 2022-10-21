require("module-alias/register")
import { Stack } from "@/util/ds";
import { ActionTransition } from "antlr4ts/atn/ActionTransition";
import { readFileSync } from "fs";
import {error_handle} from "@/error_handle/error_handle"
import {close_callback} from "@/closecallback/closecallback"



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
   export class CommandFactory{
          constructor(){};
          public create(userCommand:string):Command{
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
              default:
                return null;
            }
          }
        };


  export class  Command{
          protected commandName:string;
          protected _arguments:string[]=[];
          protected argumentError:boolean;
          public constructor(completeCommand:string){
            this._arguments=[];
            this.argumentError=false;
            this.parseCompleteCommand(completeCommand);
          }
          
          protected parseCompleteCommand(completeCommand:string){
            console.debug("parsing command");
            var commandAndArguments=completeCommand.split(" ");
            console.debug("commandName : "+commandAndArguments[0]);
            this.commandName=commandAndArguments[0];
            commandAndArguments.splice(0, 1);
            console.debug("after splice : "+commandAndArguments);
            if(commandAndArguments.length!=0){
              commandAndArguments.forEach(function(elem){
                console.debug("pushing argument "+elem);
                this._arguments;
              });
            }
            //this.parseArguments(commandAndArguments[1]);
          }

          public action(commands:Stack<Command>):void{}
          public handle(commands:Stack<Command>):void{
            console.debug(this.commandName+" action");
            this.action(commands);
          }
          public push(commands:Stack<Command>):void{
            console.debug("push "+this.commandName);
            if(this.argumentError==false)
              commands.push(this);
          }
        }

  export class add_title extends Command{
          public constructor(completeCommand:string){
            super(completeCommand);
            if(this._arguments.length==0){
              this.argumentError=true;
            }
          }
          public action(commands: Stack<Command>): void {
              if(this._arguments.length==1){
                
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
          public action(commands: Stack<Command>): void {

          }
        }

        export class delete_title extends Command{
          public constructor(completeCommand:string){
            super(completeCommand);
            if(this._arguments.length==0){
              this.argumentError=true;
            }
          }
          public action(commands: Stack<Command>): void {

          }
        }

        export class delete_bookmark extends Command{
          public constructor(completeCommand:string){
            super(completeCommand);
            if(this._arguments.length==0){
              this.argumentError=true;
            }
          }
          public action(commands: Stack<Command>): void {

          }
        }

        export class open extends Command{
          constructor(completeCommand:string){
            super(completeCommand);
            if(this._arguments.length==0){
              this.argumentError=true;
            }
          }
          public action(commands: Stack<Command>): void {
          
          }
          public push(commands:Stack<Command>):void{

          }
        }

        export class save extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(commands: Stack<Command>): void {

          }
          public push(commands:Stack<Command>):void{
            
          }
        }

        export class redo extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(commands: Stack<Command>): void {

          }
          public push(commands:Stack<Command>):void{
            
          }
        }

        export class undo extends Command{
          public constructor(commandName:string){
            super(commandName);
          }
          public action(commands: Stack<Command>): void {

          }
          public push(commands:Stack<Command>):void{
            
          }
        }
}//end of namespace cmd


