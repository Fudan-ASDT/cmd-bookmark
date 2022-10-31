require("module-alias/register")
import { Stack } from "@/util/ds";
import { ActionTransition } from "antlr4ts/atn/ActionTransition";
import { readFile, readFileSync } from "fs";
import {error_handle} from "@/error_handle/error_handle"
import {close_callback} from "@/closecallback/closecallback"
import {cmd} from "@/cmd/cmd"
import { welcome } from "@/welcome/welcome";
import { FileUtil } from "@/util/file_util";
import { BookMark } from "@/model/bookmark/bookmark";
import { Markdown } from "@/model/md/element";
import { Generator } from "@/service/generator";
export class driver{
    private unit:BookMark.Unit;//workdir
    private masterDir:BookMark.Unit;
    private prevDir:BookMark.Unit;
    private lazy:boolean;
    private errorhandler:error_handle.default_error_handler;
    private closecallback:close_callback.closecallback;
    private welcome:welcome.welcome;
    constructor(){
        this.lazy=false;
        this.errorhandler=new error_handle.default_error_handler();
        this.closecallback=new close_callback.defaultcallback();
        this.welcome=new welcome.defaultwelcome();
    }
    private welcomeMessages(){
        console.log("**********************************************");
    }
  
    private getInitialPath():string{
        let argument:string[]=process.argv.splice(2);
        let path:string=argument[0];
        return path;
    }
  
    private loadContent():string{
        let content = readFileSync(this.getInitialPath(), "utf-8");
        return content;
    }
  
    private showContent(c:string){
        console.log("current contents");
        console.log(c);
    }
    private wait4Input(){
        let container:cmd.Command[]=new Array(1024);
        let redoContainer:cmd.Command[]=new Array(1024);
        let commands:Stack<cmd.Command>=new Stack(container);
        let redoStack:Stack<cmd.Command>=new Stack(redoContainer);
        var readline = require('readline');
        var  rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        });
        let that=this;
        console.log("input your command : ");
        rl.on("line",function(userCommand){
            let tmp:string=userCommand;
            if(tmp.length!=0){
              console.debug("command is "+userCommand);
              if(userCommand=="quit"){
                rl.close();
              }else{
                //let command:Command=CommandFactory::create(userCommand);
                if(userCommand!=""){
                  let command=cmd.CommandFactory.create(userCommand);
                  if(command!=null){
                    command.push(commands);
                    command.handle(commands,redoStack,that);
                  }else{
                    that.errorhandler.setErrorcode(error_handle.errorcode.illegalcommand);
                    that.errorhandler.handle();
                  }
                }
              }
            }
        });
      
        rl.on("close", function(){
            this.closecallback.close();
        });
    }
    public run() {
        this.welcomeMessages();
        //todo 这个函数在没有这个路径的时候创建一个新的md，并放回undefined
        let md = Generator.makeBookMarkFromFile("test/md/test.md");
        //this.showContent(content);
        //let doc=Generator.makeMdFromContent(content.s);
        if(md==undefined){
          md=new BookMark.Unit(null,null);
        }
        this.unit=md;
        this.setMaster(md);
        this.wait4Input();
    }
    public getUnit():BookMark.Unit{
      return this.unit;
    }
    public setUnit(unit:BookMark.Unit){
      this.unit=unit;
    }
    public setMaster(master:BookMark.Unit){
      this.masterDir=master;
    }
    public getMaster(){
      return this.masterDir;
    }
    public getPrev(){
      return this.prevDir;
    }
    public setPrev(prev:BookMark.Unit){
      this.prevDir=prev;
    }
    public setlazy():void{
        this.lazy=true;
    }
    public setWorkDir(dir:BookMark.Unit){
        this.unit=dir;
    }
    public seterrorhandler(eh:error_handle.errorhandler):void{

    }
    public setclosecallback(cb:close_callback.closecallback){

    }
    public setwelcome(wc:welcome.welcome){

    }
}