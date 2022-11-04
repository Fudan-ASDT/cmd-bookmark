import { Driver } from "@/driver/driver";
import { Cmd } from "@/cmd/cmd";
import { Stack } from "@/util/ds";
export namespace CloseCallback {
    export abstract class CloseCallback {
        constructor() { }
        public close(dv: Driver) { }
    }

    export class DefaultCallback extends CloseCallback {
        public close(dv: Driver): void {
            console.log("saving ... ");
            let save = Cmd.CommandFactory.create("save");
            console.log("wcnm")
            save.handle(dv);
            console.log("exit");
            process.exit(0);
        }
    }
}
