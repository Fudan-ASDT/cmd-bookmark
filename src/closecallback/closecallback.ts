import { driver } from "@/driver/driver";
import { cmd } from "@/cmd/cmd";
import { Stack } from "@/util/ds";
export namespace close_callback{
    export abstract class closecallback{
        constructor(){}
        public close(dv:driver){}
    }

    export class defaultcallback extends closecallback{
        public close(dv:driver): void {
            console.log("saving ... ");
            let save=cmd.CommandFactory.create("save");
            save.handle(dv);
            console.log("exit");
            process.exit(0);
        } 
    }
}