// Generated from src/grammar/md.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly HASHTAG = 10;
	public static readonly SPACE = 11;
	public static readonly LRBRACKET = 12;
	public static readonly RRBRACKET = 13;
	public static readonly LSBRACKET = 14;
	public static readonly RSBRACKET = 15;
	public static readonly WS = 16;
	public static readonly DIGITS = 17;
	public static readonly HEX = 18;
	public static readonly STRING = 19;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"HASHTAG", "SPACE", "LRBRACKET", "RRBRACKET", "LSBRACKET", "RSBRACKET", 
		"WS", "DIGITS", "HEX", "STRING",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'://'", "':'", "'/'", "'.'", "'::'", "'@'", "'?'", "'&'", 
		"'='", "'#'", "' '", "'('", "')'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "HASHTAG", "SPACE", "LRBRACKET", "RRBRACKET", 
		"LSBRACKET", "RSBRACKET", "WS", "DIGITS", "HEX", "STRING",
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
	public get grammarFileName(): string { return "md.g4"; }

	// @Override
	public get ruleNames(): string[] { return mdLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return mdLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return mdLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return mdLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x15f\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r" +
		"\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x06\x11" +
		"L\n\x11\r\x11\x0E\x11M\x03\x12\x06\x12Q\n\x12\r\x12\x0E\x12R\x03\x13\x03" +
		"\x13\x03\x13\x06\x13X\n\x13\r\x13\x0E\x13Y\x03\x14\x03\x14\x05\x14^\n" +
		"\x14\x03\x14\x03\x14\x07\x14b\n\x14\f\x14\x0E\x14e\v\x14\x02\x02\x02\x15" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D" +
		"\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15\x03\x02\x07" +
		"\x04\x02\f\f\x0F\x0F\x03\x022;\x05\x022;CHch\x06\x022;C\\c|\x80\x80\x07" +
		"\x02--/02;C\\c|\x02k\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
		"\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r" +
		"\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13" +
		"\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19" +
		"\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F" +
		"\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02" +
		"\x02\x02\x02\'\x03\x02\x02\x02\x03)\x03\x02\x02\x02\x05-\x03\x02\x02\x02" +
		"\x07/\x03\x02\x02\x02\t1\x03\x02\x02\x02\v3\x03\x02\x02\x02\r6\x03\x02" +
		"\x02\x02\x0F8\x03\x02\x02\x02\x11:\x03\x02\x02\x02\x13<\x03\x02\x02\x02" +
		"\x15>\x03\x02\x02\x02\x17@\x03\x02\x02\x02\x19B\x03\x02\x02\x02\x1BD\x03" +
		"\x02\x02\x02\x1DF\x03\x02\x02\x02\x1FH\x03\x02\x02\x02!K\x03\x02\x02\x02" +
		"#P\x03\x02\x02\x02%W\x03\x02\x02\x02\']\x03\x02\x02\x02)*\x07<\x02\x02" +
		"*+\x071\x02\x02+,\x071\x02\x02,\x04\x03\x02\x02\x02-.\x07<\x02\x02.\x06" +
		"\x03\x02\x02\x02/0\x071\x02\x020\b\x03\x02\x02\x0212\x070\x02\x022\n\x03" +
		"\x02\x02\x0234\x07<\x02\x0245\x07<\x02\x025\f\x03\x02\x02\x0267\x07B\x02" +
		"\x027\x0E\x03\x02\x02\x0289\x07A\x02\x029\x10\x03\x02\x02\x02:;\x07(\x02" +
		"\x02;\x12\x03\x02\x02\x02<=\x07?\x02\x02=\x14\x03\x02\x02\x02>?\x07%\x02" +
		"\x02?\x16\x03\x02\x02\x02@A\x07\"\x02\x02A\x18\x03\x02\x02\x02BC\x07*" +
		"\x02\x02C\x1A\x03\x02\x02\x02DE\x07+\x02\x02E\x1C\x03\x02\x02\x02FG\x07" +
		"]\x02\x02G\x1E\x03\x02\x02\x02HI\x07_\x02\x02I \x03\x02\x02\x02JL\t\x02" +
		"\x02\x02KJ\x03\x02\x02\x02LM\x03\x02\x02\x02MK\x03\x02\x02\x02MN\x03\x02" +
		"\x02\x02N\"\x03\x02\x02\x02OQ\t\x03\x02\x02PO\x03\x02\x02\x02QR\x03\x02" +
		"\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S$\x03\x02\x02\x02TU\x07\'" +
		"\x02\x02UV\t\x04\x02\x02VX\t\x04\x02\x02WT\x03\x02\x02\x02XY\x03\x02\x02" +
		"\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z&\x03\x02\x02\x02[^\t\x05\x02" +
		"\x02\\^\x05%\x13\x02][\x03\x02\x02\x02]\\\x03\x02\x02\x02^c\x03\x02\x02" +
		"\x02_b\t\x06\x02\x02`b\x05%\x13\x02a_\x03\x02\x02\x02a`\x03\x02\x02\x02" +
		"be\x03\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d(\x03\x02\x02\x02" +
		"ec\x03\x02\x02\x02\t\x02MRY]ac\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mdLexer.__ATN) {
			mdLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mdLexer._serializedATN));
		}

		return mdLexer.__ATN;
	}

}

