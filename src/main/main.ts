require("module-alias/register")
import { Stack } from "@/util/ds";
import { ActionTransition } from "antlr4ts/atn/ActionTransition";
import { readFileSync } from "fs";
import {ErrorHandle} from "@/util/errorhandle"
import {CloseCallback} from "@/util/closecallback"
import { Driver } from "@/driver/driver";

function main(){
    let dv=new Driver();
    dv.run("real");
}

main();