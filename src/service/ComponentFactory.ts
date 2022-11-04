import { ErrorHandle } from "@/util/errorhandle"
import { CloseCallback } from "@/util/closecallback"
import { Welcome } from "@/util/welcome";
export class Component{
    constructor(){}

    public static getErrorHandler(name:string):ErrorHandle.ErrorHandler{
        switch(name){
            case "default":return new ErrorHandle.DefaultErrorHandler();break;
            default:
                break;
        }
    }

    public static getCloseCallback(name:string):CloseCallback.CloseCallback{
        switch(name){
            case "default":return new CloseCallback.DefaultCallback();break;
            default:
                break;
        }
    }

    public static getWelcome(name:string):Welcome.Welcome{
        switch(name){
            case "default":return new Welcome.DefaultWelcome();break;
            default:
                break;
        }
    }
}