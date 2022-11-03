export namespace Welcome{
    
    export abstract class Welcome{
        public sayhi(){}
    }


    export class DefaultWelcome extends Welcome{
        public sayhi(): void {
            console.log("************************");
        }
    }
}