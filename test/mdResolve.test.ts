import { readFileSync } from 'fs';
import { CharStreams , CommonTokenStream } from 'antlr4ts';

import { mdLexer } from '@/grammar/mdLexer';
import { mdParser } from '@/grammar/mdParser';

let content = readFileSync("test/md/test.md", "utf-8");
let inputStream = CharStreams.fromString(content);
let lexer = new mdLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new mdParser(tokenStream);

test("anltr4", () => {
  let tree = parser.md();
  console.log(tree.text);
})
