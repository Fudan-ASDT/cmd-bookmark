export namespace ErrorHandle {
    export enum errorcode { illegalcommand }
    export abstract class ErrorHandler {
        protected errorcode;
        constructor() { }

        public handle(): void {
            console.log("error detected " + "error_code " + this.errorcode);
            this.doerror();
        }

        public setErrorcode(code: errorcode) {
            this.errorcode = code;
        }

        protected doerror() { };
    };

    export class DefaultErrorHandler extends ErrorHandler {
        constructor() {
            super();
        }
        
        protected doerror(): void {
            switch (this.errorcode) {
                case errorcode.illegalcommand: console.log("illegal command"); break;
                default:
                    break;
            }
        }
    };
}

