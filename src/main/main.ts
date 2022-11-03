require("module-alias/register")
import { Stack } from "@/util/ds";
import { ActionTransition } from "antlr4ts/atn/ActionTransition";
import { readFileSync } from "fs";
import {ErrorHandle} from "@/errorhandle/errorhandle"
import {CloseCallback} from "@/closecallback/closecallback"
import { Driver } from "@/driver/driver";

function main(){
    let dv=new Driver();
    dv.run("real");
}

main();