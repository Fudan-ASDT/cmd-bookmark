require("module-alias/register")
import { readFileSync } from "fs";

export function run(path: string) {
  let content = readFileSync(path, "utf-8")
  console.log(content)
}

run("README.md")
