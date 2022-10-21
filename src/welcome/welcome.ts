export namespace welcome{
    export abstract class welcome{
        public sayhi(){}
    }
    export class defaultwelcome extends welcome{
        public sayhi(): void {
            console.log("************************");
        }
    }
}