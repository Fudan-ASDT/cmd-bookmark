require("module-alias/register")
import { Stack } from "@/util/ds";
import { ActionTransition } from "antlr4ts/atn/ActionTransition";
import { readFile, readFileSync } from "fs";
import { ErrorHandle } from "@/errorhandle/errorhandle"
import { CloseCallback } from "@/closecallback/closecallback"
import { Cmd } from "@/cmd/cmd"
import { Welcome } from "@/welcome/welcome";
import { FileUtil } from "@/util/file_util";
import { BookMark } from "@/model/bookmark/bookmark";
import { Markdown } from "@/model/md/element";
import { Generator } from "@/service/generator";
import { Component } from "@/ComponentFactory/ComponentFactory";
export class Driver {
  public container: Cmd.Command[] = new Array(1024);
  public redoContainer: Cmd.Command[] = new Array(1024);
  public commands: Stack<Cmd.Command> = new Stack(this.container);//for undo
  public redoStack: Stack<Cmd.Command> = new Stack(this.redoContainer);//for redo
  private unit: BookMark.Unit;//workdir
  private masterDir: BookMark.Unit;//master dir
  private lazy: boolean;//flag for lazy evaluation
  private errorhandler: ErrorHandle.ErrorHandler;
  private closecallback: CloseCallback.CloseCallback;//After the user enters quit,do some post process
  private welcome: Welcome.Welcome;//send welcome message
  private fileDir: string = "";//markdown file dir

  constructor() {
    this.lazy = false;
    this.errorhandler = Component.getErrorHandler("default");
    this.closecallback = Component.getCloseCallback("default");
    this.welcome = Component.getWelcome("default");
  }

  private getInitialPath(): string {
    let argument: string[] = process.argv.splice(2);
    let path: string = argument[0];
    return path;
  }

  private loadContent(): string {
    let content = readFileSync(this.getInitialPath(), "utf-8");
    return content;
  }

  private showContent(c: string) {
    console.log("current contents");
    console.log(c);
  }

  private wait4InputImpl() {
    var readline = require('readline');
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '>',
      preserveCursor:true
    });
    let that = this;
    console.log("input your command : ");
    rl.prompt();
    rl.on("line", function (userCommand) {
      let tmp: string = userCommand;
      if (tmp.length != 0) {
        if (userCommand == "quit") {
          rl.close();
        } else {
          //let command:Command=CommandFactory::create(userCommand);
          if (userCommand != "") {
            let command = Cmd.CommandFactory.create(userCommand);
            if (command != null) {
              /**for command like add-title...
               * will be push into stack,but undo,show-tree...
               * will not.
               */
              command.push(that.commands);
              command.handle(that);
            } else {
              that.errorhandler.setErrorcode(ErrorHandle.errorcode.illegalcommand);
              that.errorhandler.handle();
            }
          }
        }
      }
      rl.prompt();
    });
    rl.on("close", function () {
      that.closecallback.close(that);
    });
  }

  private wait4InputTest() {
    let result = new Array();
    let cmds = this.mock();
    for (let idx = 0; idx < cmds.length; idx++) {
      let command = Cmd.CommandFactory.create(cmds[idx]);
      result.push(command);
    }
    return result;
  }
  /**for Driver test,TestDriver class should 
   * extends Driver and override this method
   * to provide fake usercommands
   */
  protected mock() {
    return new Array();
  }

  private wait4Input(runMode: string) {
    if (runMode == "real")
      return this.wait4InputImpl();
    else if (runMode == "test")
      return this.wait4InputTest();
  }
  //two modes."test" for test,"real" for publish 
  public run(mode: string) {
    if (mode == "real") {
      this.welcome.sayhi();
      let dir = this.getInitialPath();
      let md = Generator.makeBookMarkFromFile(dir);
      if (md == undefined) {
        md = new BookMark.Unit(null, null);
      }
      this.unit = md;
      this.setMaster(md);
      this.setFiliDir(dir);
    }
    return this.wait4Input(mode);
  }

  public getUnit(): BookMark.Unit {
    return this.unit;
  }

  public setUnit(unit: BookMark.Unit) {
    this.unit = unit;
  }

  public setMaster(master: BookMark.Unit) {
    this.masterDir = master;
  }

  public getMaster() {
    return this.masterDir;
  }

  public setlazy(): void {
    this.lazy = true;
  }

  public setWorkDir(dir: BookMark.Unit) {
    this.unit = dir;
  }

  public seterrorhandler(eh: ErrorHandle.ErrorHandler): void {

  }

  public setclosecallback(cb: CloseCallback.CloseCallback) {

  }

  public setwelcome(wc: Welcome.Welcome) {

  }

  public setFiliDir(dir: string) {
    this.fileDir = dir;
  }

  public getFileDir() {
    return this.fileDir;
  }

}