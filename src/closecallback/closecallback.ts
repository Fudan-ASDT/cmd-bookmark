export namespace close_callback{
    export abstract class closecallback{
        constructor(){}
        public close(){}
    }

    export class defaultcallback extends closecallback{
        public close(): void {
            console.log("saving ... ");
            console.log("exit");
            process.exit(0);
        } 
    }
}