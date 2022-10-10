import { readFileSync, writeFileSync } from "fs";
import { Serializer } from "../service/serializer";

export class FileUtil {
  static writeFile<T extends string>(file_path: string, s: Serializer<T>) {
    writeFileSync(file_path, s.serialize(), "utf-8");
  }

  static readFile(file_path: string): string {
    return readFileSync(file_path, "utf-8");
  }
}
