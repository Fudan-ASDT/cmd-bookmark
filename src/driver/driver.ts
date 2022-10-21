require("module-alias/register")
import { Stack } from "@/util/ds";
import { ActionTransition } from "antlr4ts/atn/ActionTransition";
import { readFileSync } from "fs";
import {error_handle} from "@/error_handle/error_handle"
import {close_callback} from "@/closecallback/closecallback"
import {cmd} from "@/cmd/cmd"
import { welcome } from "@/welcome/welcome";
export class driver{
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
        let commands:Stack<cmd.Command>;
        let commandFactory=new cmd.CommandFactory();
        var readline = require('readline');
        var  rl = readline.createInterface({
            input:process.stdin,
            output:process.stdout
        });
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
                  let command=commandFactory.create(userCommand);
                  //只有redo,undo需要的才會push
                  if(command!=null){
                    command.push(commands);
                    command.action(commands);
                  }else{
                    this.errorhandler.setErrorcode(error_handle.errorcode.illegalcommand);
                    this.errorhandler.handle();
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
        let content=this.loadContent();
        this.showContent(content);
        this.wait4Input();
    }
    public setlazy():void{
        this.lazy=true;
    }
    public seterrorhandler(eh:error_handle.errorhandler):void{

    }
    public setclosecallback(cb:close_callback.closecallback){

    }
    public setwelcome(wc:welcome.welcome){
        
    }
}