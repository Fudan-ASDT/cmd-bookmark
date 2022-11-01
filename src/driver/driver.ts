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
    public container:cmd.Command[]=new Array(1024);
    public redoContainer:cmd.Command[]=new Array(1024);
    public commands:Stack<cmd.Command>=new Stack(this.container);
    public redoStack:Stack<cmd.Command>=new Stack(this.redoContainer);
    private unit:BookMark.Unit;//workdir
    private masterDir:BookMark.Unit;
    private prevDir:BookMark.Unit;
    private lazy:boolean;
    private errorhandler:error_handle.default_error_handler;
    private closecallback:close_callback.closecallback;
    private welcome:welcome.welcome;
    private fileDir:string="";
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

    private wait4InputImpl(){
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
                  command.push(that.commands);
                  command.handle(that);
                }else{
                  that.errorhandler.setErrorcode(error_handle.errorcode.illegalcommand);
                  that.errorhandler.handle();
                }
              }
            }
          }
      });
      
      rl.on("close", function(){
          that.closecallback.close(that);
      });
    }
    private wait4InputTest(){
      let result=new Array();
      let cmds=this.mock();
      for(let idx=0;idx<cmds.length;idx++){
          let command=cmd.CommandFactory.create(cmds[idx]);
          result.push(command);
      }
      return result;
    } 
    protected mock(){
      return new Array();
    }
    private wait4Input(runMode:string){
        if(runMode=="real")
        return this.wait4InputImpl();
        else if(runMode=="test")
        return this.wait4InputTest();
    }
    public run(mode:string) {
        if(mode=="resl"){
          this.welcomeMessages();
          //todo 这个函数在没有这个路径的时候创建一个新的md，并放回undefined
          let dir=this.getInitialPath();
          let md = Generator.makeBookMarkFromFile(dir);
          if(md==undefined){
            md=new BookMark.Unit(null,null);
          }
          this.unit=md;
          this.setMaster(md);
          this.setFiliDir(dir);
        }
        return this.wait4Input(mode);
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
    public setFiliDir(dir:string){
      this.fileDir=dir;
    }
    public getFileDir(){
      return this.fileDir;
    }
}