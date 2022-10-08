// Generated from src/grammar/md.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { mdListener } from "./mdListener";
import { mdVisitor } from "./mdVisitor";


export class mdParser extends Parser {
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
	public static readonly RULE_md = 0;
	public static readonly RULE_title = 1;
	public static readonly RULE_link = 2;
	public static readonly RULE_url = 3;
	public static readonly RULE_scheme = 4;
	public static readonly RULE_host = 5;
	public static readonly RULE_hostname = 6;
	public static readonly RULE_v6host = 7;
	public static readonly RULE_port = 8;
	public static readonly RULE_path = 9;
	public static readonly RULE_login = 10;
	public static readonly RULE_user = 11;
	public static readonly RULE_password = 12;
	public static readonly RULE_query = 13;
	public static readonly RULE_search = 14;
	public static readonly RULE_searchparameter = 15;
	public static readonly RULE_frag = 16;
	public static readonly RULE_string = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"md", "title", "link", "url", "scheme", "host", "hostname", "v6host", 
		"port", "path", "login", "user", "password", "query", "search", "searchparameter", 
		"frag", "string",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mdParser._LITERAL_NAMES, mdParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mdParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "md.g4"; }

	// @Override
	public get ruleNames(): string[] { return mdParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return mdParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(mdParser._ATN, this);
	}
	// @RuleVersion(0)
	public md(): MdContext {
		let _localctx: MdContext = new MdContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, mdParser.RULE_md);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 36;
				this.title();
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 37;
					this.link();
					}
					}
					this.state = 40;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === mdParser.LSBRACKET);
				}
				}
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mdParser.HASHTAG);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public title(): TitleContext {
		let _localctx: TitleContext = new TitleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, mdParser.RULE_title);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 46;
				this.match(mdParser.HASHTAG);
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mdParser.HASHTAG);
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 51;
				this.match(mdParser.SPACE);
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mdParser.SPACE);
			this.state = 56;
			this.string();
			this.state = 57;
			this.match(mdParser.WS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public link(): LinkContext {
		let _localctx: LinkContext = new LinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mdParser.RULE_link);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.match(mdParser.LSBRACKET);
			this.state = 60;
			this.string();
			this.state = 61;
			this.match(mdParser.RSBRACKET);
			this.state = 62;
			this.match(mdParser.LRBRACKET);
			this.state = 63;
			this.url();
			this.state = 64;
			this.match(mdParser.RRBRACKET);
			this.state = 65;
			this.match(mdParser.WS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public url(): UrlContext {
		let _localctx: UrlContext = new UrlContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, mdParser.RULE_url);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.scheme();
			this.state = 68;
			this.match(mdParser.T__0);
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 69;
				this.login();
				}
				break;
			}
			this.state = 72;
			this.host();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.T__1) {
				{
				this.state = 73;
				this.match(mdParser.T__1);
				this.state = 74;
				this.port();
				}
			}

			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.T__2) {
				{
				this.state = 77;
				this.match(mdParser.T__2);
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === mdParser.DIGITS || _la === mdParser.STRING) {
					{
					this.state = 78;
					this.path();
					}
				}

				}
			}

			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.T__6) {
				{
				this.state = 83;
				this.query();
				}
			}

			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.HASHTAG) {
				{
				this.state = 86;
				this.frag();
				}
			}

			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.WS) {
				{
				this.state = 89;
				this.match(mdParser.WS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scheme(): SchemeContext {
		let _localctx: SchemeContext = new SchemeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, mdParser.RULE_scheme);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public host(): HostContext {
		let _localctx: HostContext = new HostContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mdParser.RULE_host);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.T__2) {
				{
				this.state = 94;
				this.match(mdParser.T__2);
				}
			}

			this.state = 97;
			this.hostname();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hostname(): HostnameContext {
		let _localctx: HostnameContext = new HostnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, mdParser.RULE_hostname);
		let _la: number;
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdParser.DIGITS:
			case mdParser.STRING:
				_localctx = new DomainNameOrIPv4HostContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.string();
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mdParser.T__3) {
					{
					{
					this.state = 100;
					this.match(mdParser.T__3);
					this.state = 101;
					this.string();
					}
					}
					this.state = 106;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case mdParser.LSBRACKET:
				_localctx = new IPv6HostContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this.match(mdParser.LSBRACKET);
				this.state = 108;
				this.v6host();
				this.state = 109;
				this.match(mdParser.RSBRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public v6host(): V6hostContext {
		let _localctx: V6hostContext = new V6hostContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, mdParser.RULE_v6host);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.T__4) {
				{
				this.state = 113;
				this.match(mdParser.T__4);
				}
			}

			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 116;
				this.string();
				}
				break;

			case 2:
				{
				this.state = 117;
				this.match(mdParser.DIGITS);
				}
				break;
			}
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdParser.T__1 || _la === mdParser.T__4) {
				{
				{
				this.state = 120;
				_la = this._input.LA(1);
				if (!(_la === mdParser.T__1 || _la === mdParser.T__4)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 123;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 121;
					this.string();
					}
					break;

				case 2:
					{
					this.state = 122;
					this.match(mdParser.DIGITS);
					}
					break;
				}
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public port(): PortContext {
		let _localctx: PortContext = new PortContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, mdParser.RULE_port);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(mdParser.DIGITS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mdParser.RULE_path);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.string();
			this.state = 137;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 133;
					this.match(mdParser.T__2);
					this.state = 134;
					this.string();
					}
					}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.T__2) {
				{
				this.state = 140;
				this.match(mdParser.T__2);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public login(): LoginContext {
		let _localctx: LoginContext = new LoginContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mdParser.RULE_login);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.user();
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.T__1) {
				{
				this.state = 144;
				this.match(mdParser.T__1);
				this.state = 145;
				this.password();
				}
			}

			this.state = 148;
			this.match(mdParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public user(): UserContext {
		let _localctx: UserContext = new UserContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mdParser.RULE_user);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public password(): PasswordContext {
		let _localctx: PasswordContext = new PasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, mdParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, mdParser.RULE_query);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(mdParser.T__6);
			this.state = 155;
			this.search();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public search(): SearchContext {
		let _localctx: SearchContext = new SearchContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, mdParser.RULE_search);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.searchparameter();
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdParser.T__7) {
				{
				{
				this.state = 158;
				this.match(mdParser.T__7);
				this.state = 159;
				this.searchparameter();
				}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public searchparameter(): SearchparameterContext {
		let _localctx: SearchparameterContext = new SearchparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, mdParser.RULE_searchparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.string();
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.T__8) {
				{
				this.state = 166;
				this.match(mdParser.T__8);
				this.state = 170;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 167;
					this.string();
					}
					break;

				case 2:
					{
					this.state = 168;
					this.match(mdParser.DIGITS);
					}
					break;

				case 3:
					{
					this.state = 169;
					this.match(mdParser.HEX);
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frag(): FragContext {
		let _localctx: FragContext = new FragContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mdParser.RULE_frag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(mdParser.HASHTAG);
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 175;
				this.string();
				}
				break;

			case 2:
				{
				this.state = 176;
				this.match(mdParser.DIGITS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, mdParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			_la = this._input.LA(1);
			if (!(_la === mdParser.DIGITS || _la === mdParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x15\xB8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x03\x02\x06\x02)\n\x02\r\x02\x0E\x02*\x06\x02-\n\x02" +
		"\r\x02\x0E\x02.\x03\x03\x06\x032\n\x03\r\x03\x0E\x033\x03\x03\x06\x03" +
		"7\n\x03\r\x03\x0E\x038\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05" +
		"I\n\x05\x03\x05\x03\x05\x03\x05\x05\x05N\n\x05\x03\x05\x03\x05\x05\x05" +
		"R\n\x05\x05\x05T\n\x05\x03\x05\x05\x05W\n\x05\x03\x05\x05\x05Z\n\x05\x03" +
		"\x05\x05\x05]\n\x05\x03\x06\x03\x06\x03\x07\x05\x07b\n\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x07\bi\n\b\f\b\x0E\bl\v\b\x03\b\x03\b\x03\b\x03" +
		"\b\x05\br\n\b\x03\t\x05\tu\n\t\x03\t\x03\t\x05\ty\n\t\x03\t\x03\t\x03" +
		"\t\x05\t~\n\t\x07\t\x80\n\t\f\t\x0E\t\x83\v\t\x03\n\x03\n\x03\v\x03\v" +
		"\x03\v\x07\v\x8A\n\v\f\v\x0E\v\x8D\v\v\x03\v\x05\v\x90\n\v\x03\f\x03\f" +
		"\x03\f\x05\f\x95\n\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xA3\n\x10\f\x10\x0E\x10\xA6" +
		"\v\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xAD\n\x11\x05\x11" +
		"\xAF\n\x11\x03\x12\x03\x12\x03\x12\x05\x12\xB4\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x02\x02\x02\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02\x02\x04\x04\x02\x04\x04\x07\x07\x04\x02\x13\x13\x15\x15\x02" +
		"\xBF\x02,\x03\x02\x02\x02\x041\x03\x02\x02\x02\x06=\x03\x02\x02\x02\b" +
		"E\x03\x02\x02\x02\n^\x03\x02\x02\x02\fa\x03\x02\x02\x02\x0Eq\x03\x02\x02" +
		"\x02\x10t\x03\x02\x02\x02\x12\x84\x03\x02\x02\x02\x14\x86\x03\x02\x02" +
		"\x02\x16\x91\x03\x02\x02\x02\x18\x98\x03\x02\x02\x02\x1A\x9A\x03\x02\x02" +
		"\x02\x1C\x9C\x03\x02\x02\x02\x1E\x9F\x03\x02\x02\x02 \xA7\x03\x02\x02" +
		"\x02\"\xB0\x03\x02\x02\x02$\xB5\x03\x02\x02\x02&(\x05\x04\x03\x02\')\x05" +
		"\x06\x04\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02*(\x03\x02\x02\x02*+" +
		"\x03\x02\x02\x02+-\x03\x02\x02\x02,&\x03\x02\x02\x02-.\x03\x02\x02\x02" +
		".,\x03\x02\x02\x02./\x03\x02\x02\x02/\x03\x03\x02\x02\x0202\x07\f\x02" +
		"\x0210\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02" +
		"\x0246\x03\x02\x02\x0257\x07\r\x02\x0265\x03\x02\x02\x0278\x03\x02\x02" +
		"\x0286\x03\x02\x02\x0289\x03\x02\x02\x029:\x03\x02\x02\x02:;\x05$\x13" +
		"\x02;<\x07\x12\x02\x02<\x05\x03\x02\x02\x02=>\x07\x10\x02\x02>?\x05$\x13" +
		"\x02?@\x07\x11\x02\x02@A\x07\x0E\x02\x02AB\x05\b\x05\x02BC\x07\x0F\x02" +
		"\x02CD\x07\x12\x02\x02D\x07\x03\x02\x02\x02EF\x05\n\x06\x02FH\x07\x03" +
		"\x02\x02GI\x05\x16\f\x02HG\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02" +
		"\x02\x02JM\x05\f\x07\x02KL\x07\x04\x02\x02LN\x05\x12\n\x02MK\x03\x02\x02" +
		"\x02MN\x03\x02\x02\x02NS\x03\x02\x02\x02OQ\x07\x05\x02\x02PR\x05\x14\v" +
		"\x02QP\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02SO\x03\x02\x02" +
		"\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02UW\x05\x1C\x0F\x02VU\x03\x02\x02" +
		"\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02XZ\x05\"\x12\x02YX\x03\x02\x02" +
		"\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[]\x07\x12\x02\x02\\[\x03\x02" +
		"\x02\x02\\]\x03\x02\x02\x02]\t\x03\x02\x02\x02^_\x05$\x13\x02_\v\x03\x02" +
		"\x02\x02`b\x07\x05\x02\x02a`\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02" +
		"\x02\x02cd\x05\x0E\b\x02d\r\x03\x02\x02\x02ej\x05$\x13\x02fg\x07\x06\x02" +
		"\x02gi\x05$\x13\x02hf\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02" +
		"\x02jk\x03\x02\x02\x02kr\x03\x02\x02\x02lj\x03\x02\x02\x02mn\x07\x10\x02" +
		"\x02no\x05\x10\t\x02op\x07\x11\x02\x02pr\x03\x02\x02\x02qe\x03\x02\x02" +
		"\x02qm\x03\x02\x02\x02r\x0F\x03\x02\x02\x02su\x07\x07\x02\x02ts\x03\x02" +
		"\x02\x02tu\x03\x02\x02\x02ux\x03\x02\x02\x02vy\x05$\x13\x02wy\x07\x13" +
		"\x02\x02xv\x03\x02\x02\x02xw\x03\x02\x02\x02y\x81\x03\x02\x02\x02z}\t" +
		"\x02\x02\x02{~\x05$\x13\x02|~\x07\x13\x02\x02}{\x03\x02\x02\x02}|\x03" +
		"\x02\x02\x02~\x80\x03\x02\x02\x02\x7Fz\x03\x02\x02\x02\x80\x83\x03\x02" +
		"\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x11\x03\x02" +
		"\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07\x13\x02\x02\x85\x13\x03\x02" +
		"\x02\x02\x86\x8B\x05$\x13\x02\x87\x88\x07\x05\x02\x02\x88\x8A\x05$\x13" +
		"\x02\x89\x87\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02" +
		"\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B\x03\x02\x02" +
		"\x02\x8E\x90\x07\x05\x02\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02" +
		"\x02\x90\x15\x03\x02\x02\x02\x91\x94\x05\x18\r\x02\x92\x93\x07\x04\x02" +
		"\x02\x93\x95\x05\x1A\x0E\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02" +
		"\x02\x95\x96\x03\x02\x02\x02\x96\x97\x07\b\x02\x02\x97\x17\x03\x02\x02" +
		"\x02\x98\x99\x05$\x13\x02\x99\x19\x03\x02\x02\x02\x9A\x9B\x05$\x13\x02" +
		"\x9B\x1B\x03\x02\x02\x02\x9C\x9D\x07\t\x02\x02\x9D\x9E\x05\x1E\x10\x02" +
		"\x9E\x1D\x03\x02\x02\x02\x9F\xA4\x05 \x11\x02\xA0\xA1\x07\n\x02\x02\xA1" +
		"\xA3\x05 \x11\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4" +
		"\xA2\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\x1F\x03\x02\x02\x02\xA6" +
		"\xA4\x03\x02\x02\x02\xA7\xAE\x05$\x13\x02\xA8\xAC\x07\v\x02\x02\xA9\xAD" +
		"\x05$\x13\x02\xAA\xAD\x07\x13\x02\x02\xAB\xAD\x07\x14\x02\x02\xAC\xA9" +
		"\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\xAF" +
		"\x03\x02\x02\x02\xAE\xA8\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF!" +
		"\x03\x02\x02\x02\xB0\xB3\x07\f\x02\x02\xB1\xB4\x05$\x13\x02\xB2\xB4\x07" +
		"\x13\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4#\x03" +
		"\x02\x02\x02\xB5\xB6\t\x03\x02\x02\xB6%\x03\x02\x02\x02\x1B*.38HMQSVY" +
		"\\ajqtx}\x81\x8B\x8F\x94\xA4\xAC\xAE\xB3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mdParser.__ATN) {
			mdParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mdParser._serializedATN));
		}

		return mdParser.__ATN;
	}

}

export class MdContext extends ParserRuleContext {
	public title(): TitleContext[];
	public title(i: number): TitleContext;
	public title(i?: number): TitleContext | TitleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TitleContext);
		} else {
			return this.getRuleContext(i, TitleContext);
		}
	}
	public link(): LinkContext[];
	public link(i: number): LinkContext;
	public link(i?: number): LinkContext | LinkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinkContext);
		} else {
			return this.getRuleContext(i, LinkContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_md; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterMd) {
			listener.enterMd(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitMd) {
			listener.exitMd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitMd) {
			return visitor.visitMd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public WS(): TerminalNode { return this.getToken(mdParser.WS, 0); }
	public HASHTAG(): TerminalNode[];
	public HASHTAG(i: number): TerminalNode;
	public HASHTAG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdParser.HASHTAG);
		} else {
			return this.getToken(mdParser.HASHTAG, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdParser.SPACE);
		} else {
			return this.getToken(mdParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_title; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitTitle) {
			return visitor.visitTitle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinkContext extends ParserRuleContext {
	public LSBRACKET(): TerminalNode { return this.getToken(mdParser.LSBRACKET, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public RSBRACKET(): TerminalNode { return this.getToken(mdParser.RSBRACKET, 0); }
	public LRBRACKET(): TerminalNode { return this.getToken(mdParser.LRBRACKET, 0); }
	public url(): UrlContext {
		return this.getRuleContext(0, UrlContext);
	}
	public RRBRACKET(): TerminalNode { return this.getToken(mdParser.RRBRACKET, 0); }
	public WS(): TerminalNode { return this.getToken(mdParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_link; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterLink) {
			listener.enterLink(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitLink) {
			listener.exitLink(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitLink) {
			return visitor.visitLink(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UrlContext extends ParserRuleContext {
	public scheme(): SchemeContext {
		return this.getRuleContext(0, SchemeContext);
	}
	public host(): HostContext {
		return this.getRuleContext(0, HostContext);
	}
	public login(): LoginContext | undefined {
		return this.tryGetRuleContext(0, LoginContext);
	}
	public port(): PortContext | undefined {
		return this.tryGetRuleContext(0, PortContext);
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public frag(): FragContext | undefined {
		return this.tryGetRuleContext(0, FragContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(mdParser.WS, 0); }
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_url; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitUrl) {
			return visitor.visitUrl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemeContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_scheme; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterScheme) {
			listener.enterScheme(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitScheme) {
			listener.exitScheme(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitScheme) {
			return visitor.visitScheme(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HostContext extends ParserRuleContext {
	public hostname(): HostnameContext {
		return this.getRuleContext(0, HostnameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_host; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterHost) {
			listener.enterHost(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitHost) {
			listener.exitHost(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitHost) {
			return visitor.visitHost(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HostnameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_hostname; }
	public copyFrom(ctx: HostnameContext): void {
		super.copyFrom(ctx);
	}
}
export class DomainNameOrIPv4HostContext extends HostnameContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(ctx: HostnameContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterDomainNameOrIPv4Host) {
			listener.enterDomainNameOrIPv4Host(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitDomainNameOrIPv4Host) {
			listener.exitDomainNameOrIPv4Host(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitDomainNameOrIPv4Host) {
			return visitor.visitDomainNameOrIPv4Host(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IPv6HostContext extends HostnameContext {
	public LSBRACKET(): TerminalNode { return this.getToken(mdParser.LSBRACKET, 0); }
	public v6host(): V6hostContext {
		return this.getRuleContext(0, V6hostContext);
	}
	public RSBRACKET(): TerminalNode { return this.getToken(mdParser.RSBRACKET, 0); }
	constructor(ctx: HostnameContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterIPv6Host) {
			listener.enterIPv6Host(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitIPv6Host) {
			listener.exitIPv6Host(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitIPv6Host) {
			return visitor.visitIPv6Host(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class V6hostContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public DIGITS(): TerminalNode[];
	public DIGITS(i: number): TerminalNode;
	public DIGITS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdParser.DIGITS);
		} else {
			return this.getToken(mdParser.DIGITS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_v6host; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterV6host) {
			listener.enterV6host(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitV6host) {
			listener.exitV6host(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitV6host) {
			return visitor.visitV6host(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortContext extends ParserRuleContext {
	public DIGITS(): TerminalNode { return this.getToken(mdParser.DIGITS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_port; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterPort) {
			listener.enterPort(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitPort) {
			listener.exitPort(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitPort) {
			return visitor.visitPort(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_path; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoginContext extends ParserRuleContext {
	public user(): UserContext {
		return this.getRuleContext(0, UserContext);
	}
	public password(): PasswordContext | undefined {
		return this.tryGetRuleContext(0, PasswordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_login; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterLogin) {
			listener.enterLogin(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitLogin) {
			listener.exitLogin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitLogin) {
			return visitor.visitLogin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_user; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterUser) {
			listener.enterUser(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitUser) {
			listener.exitUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitUser) {
			return visitor.visitUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PasswordContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_password; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterPassword) {
			listener.enterPassword(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitPassword) {
			listener.exitPassword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitPassword) {
			return visitor.visitPassword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public search(): SearchContext {
		return this.getRuleContext(0, SearchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_query; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchContext extends ParserRuleContext {
	public searchparameter(): SearchparameterContext[];
	public searchparameter(i: number): SearchparameterContext;
	public searchparameter(i?: number): SearchparameterContext | SearchparameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SearchparameterContext);
		} else {
			return this.getRuleContext(i, SearchparameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_search; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterSearch) {
			listener.enterSearch(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitSearch) {
			listener.exitSearch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitSearch) {
			return visitor.visitSearch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchparameterContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public DIGITS(): TerminalNode | undefined { return this.tryGetToken(mdParser.DIGITS, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(mdParser.HEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_searchparameter; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterSearchparameter) {
			listener.enterSearchparameter(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitSearchparameter) {
			listener.exitSearchparameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitSearchparameter) {
			return visitor.visitSearchparameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FragContext extends ParserRuleContext {
	public HASHTAG(): TerminalNode { return this.getToken(mdParser.HASHTAG, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public DIGITS(): TerminalNode | undefined { return this.tryGetToken(mdParser.DIGITS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_frag; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterFrag) {
			listener.enterFrag(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitFrag) {
			listener.exitFrag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitFrag) {
			return visitor.visitFrag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(mdParser.STRING, 0); }
	public DIGITS(): TerminalNode | undefined { return this.tryGetToken(mdParser.DIGITS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_string; }
	// @Override
	public enterRule(listener: mdListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: mdListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


