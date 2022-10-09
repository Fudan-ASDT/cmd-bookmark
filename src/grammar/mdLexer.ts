// Generated from src/grammar/mdLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class mdLexer extends Lexer {
	public static readonly MD_TITLE_TAG = 1;
	public static readonly HASHTAG = 2;
	public static readonly SPACE = 3;
	public static readonly LRBRACKET = 4;
	public static readonly RRBRACKET = 5;
	public static readonly LSBRACKET = 6;
	public static readonly RSBRACKET = 7;
	public static readonly COLON = 8;
	public static readonly SLASH = 9;
	public static readonly COLON_DOUBLE_SLASH = 10;
	public static readonly DOUBLE_COLON = 11;
	public static readonly DOT = 12;
	public static readonly AT = 13;
	public static readonly QUESTION_MARK = 14;
	public static readonly AND = 15;
	public static readonly EQUAL = 16;
	public static readonly WS = 17;
	public static readonly DIGITS = 18;
	public static readonly HEX = 19;
	public static readonly STRING = 20;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"MD_TITLE_TAG", "HASHTAG", "SPACE", "LRBRACKET", "RRBRACKET", "LSBRACKET", 
		"RSBRACKET", "COLON", "SLASH", "COLON_DOUBLE_SLASH", "DOUBLE_COLON", "DOT", 
		"AT", "QUESTION_MARK", "AND", "EQUAL", "WS", "DIGITS", "HEX", "STRING",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'#'", "' '", "'('", "')'", "'['", "']'", "':'", 
		"'/'", undefined, "'::'", "'.'", "'@'", "'?'", "'&'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MD_TITLE_TAG", "HASHTAG", "SPACE", "LRBRACKET", "RRBRACKET", 
		"LSBRACKET", "RSBRACKET", "COLON", "SLASH", "COLON_DOUBLE_SLASH", "DOUBLE_COLON", 
		"DOT", "AT", "QUESTION_MARK", "AND", "EQUAL", "WS", "DIGITS", "HEX", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mdLexer._LITERAL_NAMES, mdLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mdLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(mdLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "mdLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return mdLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return mdLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return mdLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return mdLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x16n\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x06\x02-\n\x02\r\x02" +
		"\x0E\x02.\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x06\x12S\n\x12\r\x12\x0E\x12" +
		"T\x03\x13\x06\x13X\n\x13\r\x13\x0E\x13Y\x03\x14\x03\x14\x03\x14\x06\x14" +
		"_\n\x14\r\x14\x0E\x14`\x03\x15\x03\x15\x05\x15e\n\x15\x03\x15\x03\x15" +
		"\x03\x15\x07\x15j\n\x15\f\x15\x0E\x15m\v\x15\x02\x02\x02\x16\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
		"\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16\x03\x02\b\x04\x02" +
		"\f\f\x0F\x0F\x03\x022;\x05\x022;CHch\x06\x022;C\\c|\x80\x80\x07\x02--" +
		"/02;C\\c|\x04\x02\"\"aa\x02u\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
		"\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02" +
		"%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x03,\x03" +
		"\x02\x02\x02\x050\x03\x02\x02\x02\x072\x03\x02\x02\x02\t4\x03\x02\x02" +
		"\x02\v6\x03\x02\x02\x02\r8\x03\x02\x02\x02\x0F:\x03\x02\x02\x02\x11<\x03" +
		"\x02\x02\x02\x13>\x03\x02\x02\x02\x15@\x03\x02\x02\x02\x17D\x03\x02\x02" +
		"\x02\x19G\x03\x02\x02\x02\x1BI\x03\x02\x02\x02\x1DK\x03\x02\x02\x02\x1F" +
		"M\x03\x02\x02\x02!O\x03\x02\x02\x02#R\x03\x02\x02\x02%W\x03\x02\x02\x02" +
		"\'^\x03\x02\x02\x02)d\x03\x02\x02\x02+-\x05\x05\x03\x02,+\x03\x02\x02" +
		"\x02-.\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/\x04\x03\x02" +
		"\x02\x0201\x07%\x02\x021\x06\x03\x02\x02\x0223\x07\"\x02\x023\b\x03\x02" +
		"\x02\x0245\x07*\x02\x025\n\x03\x02\x02\x0267\x07+\x02\x027\f\x03\x02\x02" +
		"\x0289\x07]\x02\x029\x0E\x03\x02\x02\x02:;\x07_\x02\x02;\x10\x03\x02\x02" +
		"\x02<=\x07<\x02\x02=\x12\x03\x02\x02\x02>?\x071\x02\x02?\x14\x03\x02\x02" +
		"\x02@A\x05\x11\t\x02AB\x05\x13\n\x02BC\x05\x13\n\x02C\x16\x03\x02\x02" +
		"\x02DE\x07<\x02\x02EF\x07<\x02\x02F\x18\x03\x02\x02\x02GH\x070\x02\x02" +
		"H\x1A\x03\x02\x02\x02IJ\x07B\x02\x02J\x1C\x03\x02\x02\x02KL\x07A\x02\x02" +
		"L\x1E\x03\x02\x02\x02MN\x07(\x02\x02N \x03\x02\x02\x02OP\x07?\x02\x02" +
		"P\"\x03\x02\x02\x02QS\t\x02\x02\x02RQ\x03\x02\x02\x02ST\x03\x02\x02\x02" +
		"TR\x03\x02\x02\x02TU\x03\x02\x02\x02U$\x03\x02\x02\x02VX\t\x03\x02\x02" +
		"WV\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z&\x03\x02\x02\x02[\\\x07\'\x02\x02\\]\t\x04\x02\x02]_\t\x04\x02\x02^" +
		"[\x03\x02\x02\x02_`\x03\x02\x02\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02" +
		"a(\x03\x02\x02\x02be\t\x05\x02\x02ce\x05\'\x14\x02db\x03\x02\x02\x02d" +
		"c\x03\x02\x02\x02ek\x03\x02\x02\x02fj\t\x06\x02\x02gj\x05\'\x14\x02hj" +
		"\t\x07\x02\x02if\x03\x02\x02\x02ig\x03\x02\x02\x02ih\x03\x02\x02\x02j" +
		"m\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02l*\x03\x02\x02\x02" +
		"mk\x03\x02\x02\x02\n\x02.TY`dik\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mdLexer.__ATN) {
			mdLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mdLexer._serializedATN));
		}

		return mdLexer.__ATN;
	}

}

