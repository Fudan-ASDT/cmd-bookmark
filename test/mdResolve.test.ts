import { readFileSync } from 'fs';
import { CharStreams , CommonTokenStream } from 'antlr4ts';

import { mdLexer } from '@/grammar/mdLexer';
import { mdParser } from '@/grammar/mdParser';
import { Generator } from '@/service/generator';

let content = readFileSync("test/md/test.md", "utf-8");

test("anltr4", () => {
  let inputStream = CharStreams.fromString(content);
  let lexer = new mdLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new mdParser(tokenStream);
  let tree = parser.md();

  expect(tree.childCount).toBe(12);
})

test("visitor", () => {
  let md = Generator.makeMdFromFile("test/md/test.md");
  expect(md.elems.length).toBe(12);
  // console.log(visitor.elems);
})
