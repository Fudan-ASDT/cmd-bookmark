import { HostContext } from "@/grammar/mdParser";

export namespace error_handle{
    export enum errorcode{illegalcommand}
    export abstract class errorhandler{
        protected errorcode;
        constructor(){}
        public handle():void{
            console.log("error detected "+"error_code "+this.errorcode);
            this.doerror();
        }
        public setErrorcode(code:errorcode){
            this.errorcode=code;
        }
        protected doerror(){};
    };

    export class default_error_handler extends errorhandler{
        constructor(){
            super();
            console.debug("constructing default errorhandler");
        }
        protected doerror(): void {
            switch(this.errorcode){
                case errorcode.illegalcommand:console.log("illegal command");break;
                default:
                    break;
            }
        }
    };
}

