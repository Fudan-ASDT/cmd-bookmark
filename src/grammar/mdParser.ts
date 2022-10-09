// Generated from src/grammar/mdParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { mdParserListener } from "./mdParserListener";
import { mdParserVisitor } from "./mdParserVisitor";


export class mdParser extends Parser {
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
	public static readonly RULE_md = 0;
	public static readonly RULE_mdItem = 1;
	public static readonly RULE_title = 2;
	public static readonly RULE_link = 3;
	public static readonly RULE_url = 4;
	public static readonly RULE_scheme = 5;
	public static readonly RULE_host = 6;
	public static readonly RULE_hostname = 7;
	public static readonly RULE_v6host = 8;
	public static readonly RULE_port = 9;
	public static readonly RULE_path = 10;
	public static readonly RULE_login = 11;
	public static readonly RULE_user = 12;
	public static readonly RULE_password = 13;
	public static readonly RULE_query = 14;
	public static readonly RULE_search = 15;
	public static readonly RULE_searchparameter = 16;
	public static readonly RULE_frag = 17;
	public static readonly RULE_string = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"md", "mdItem", "title", "link", "url", "scheme", "host", "hostname",
		"v6host", "port", "path", "login", "user", "password", "query", "search",
		"searchparameter", "frag", "string",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mdParser._LITERAL_NAMES, mdParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mdParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "mdParser.g4"; }

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
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 38;
				this.mdItem();
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mdParser.MD_TITLE_TAG || _la === mdParser.LSBRACKET);
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
	public mdItem(): MdItemContext {
		let _localctx: MdItemContext = new MdItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, mdParser.RULE_mdItem);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdParser.MD_TITLE_TAG:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43;
				this.title();
				}
				break;
			case mdParser.LSBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.link();
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
	public title(): TitleContext {
		let _localctx: TitleContext = new TitleContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mdParser.RULE_title);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(mdParser.MD_TITLE_TAG);
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 48;
				this.match(mdParser.SPACE);
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mdParser.SPACE);
			this.state = 53;
			this.string();
			this.state = 54;
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
		this.enterRule(_localctx, 6, mdParser.RULE_link);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this.match(mdParser.LSBRACKET);
			this.state = 57;
			this.string();
			this.state = 58;
			this.match(mdParser.RSBRACKET);
			this.state = 59;
			this.match(mdParser.LRBRACKET);
			this.state = 60;
			this.url();
			this.state = 61;
			this.match(mdParser.RRBRACKET);
			this.state = 62;
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
		this.enterRule(_localctx, 8, mdParser.RULE_url);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.scheme();
			this.state = 65;
			this.match(mdParser.COLON_DOUBLE_SLASH);
			this.state = 67;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 66;
				this.login();
				}
				break;
			}
			this.state = 69;
			this.host();
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.COLON) {
				{
				this.state = 70;
				this.match(mdParser.COLON);
				this.state = 71;
				this.port();
				}
			}

			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.SLASH) {
				{
				this.state = 74;
				this.match(mdParser.SLASH);
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === mdParser.DIGITS || _la === mdParser.STRING) {
					{
					this.state = 75;
					this.path();
					}
				}

				}
			}

			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.QUESTION_MARK) {
				{
				this.state = 80;
				this.query();
				}
			}

			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.HASHTAG) {
				{
				this.state = 83;
				this.frag();
				}
			}

			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.WS) {
				{
				this.state = 86;
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
		this.enterRule(_localctx, 10, mdParser.RULE_scheme);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.match(mdParser.STRING);
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
		this.enterRule(_localctx, 12, mdParser.RULE_host);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.SLASH) {
				{
				this.state = 91;
				this.match(mdParser.SLASH);
				}
			}

			this.state = 94;
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
		this.enterRule(_localctx, 14, mdParser.RULE_hostname);
		let _la: number;
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mdParser.DIGITS:
			case mdParser.STRING:
				_localctx = new DomainNameOrIPv4HostContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.string();
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mdParser.DOT) {
					{
					{
					this.state = 97;
					this.match(mdParser.DOT);
					this.state = 98;
					this.string();
					}
					}
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case mdParser.LSBRACKET:
				_localctx = new IPv6HostContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.match(mdParser.LSBRACKET);
				this.state = 105;
				this.v6host();
				this.state = 106;
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
		this.enterRule(_localctx, 16, mdParser.RULE_v6host);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.DOUBLE_COLON) {
				{
				this.state = 110;
				this.match(mdParser.DOUBLE_COLON);
				}
			}

			this.state = 113;
			this.string();
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdParser.COLON || _la === mdParser.DOUBLE_COLON) {
				{
				{
				this.state = 114;
				_la = this._input.LA(1);
				if (!(_la === mdParser.COLON || _la === mdParser.DOUBLE_COLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 115;
				this.string();
				}
				}
				this.state = 120;
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
		this.enterRule(_localctx, 18, mdParser.RULE_port);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
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
		this.enterRule(_localctx, 20, mdParser.RULE_path);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.string();
			this.state = 128;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 124;
					this.match(mdParser.SLASH);
					this.state = 125;
					this.string();
					}
					}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.SLASH) {
				{
				this.state = 131;
				this.match(mdParser.SLASH);
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
		this.enterRule(_localctx, 22, mdParser.RULE_login);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.user();
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.COLON) {
				{
				this.state = 135;
				this.match(mdParser.COLON);
				this.state = 136;
				this.password();
				}
			}

			this.state = 139;
			this.match(mdParser.AT);
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
		this.enterRule(_localctx, 24, mdParser.RULE_user);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
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
		this.enterRule(_localctx, 26, mdParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
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
		this.enterRule(_localctx, 28, mdParser.RULE_query);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(mdParser.QUESTION_MARK);
			this.state = 146;
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
		this.enterRule(_localctx, 30, mdParser.RULE_search);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.searchparameter();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mdParser.AND) {
				{
				{
				this.state = 149;
				this.match(mdParser.AND);
				this.state = 150;
				this.searchparameter();
				}
				}
				this.state = 155;
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
		this.enterRule(_localctx, 32, mdParser.RULE_searchparameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.string();
			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mdParser.EQUAL) {
				{
				this.state = 157;
				this.match(mdParser.EQUAL);
				this.state = 160;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case mdParser.DIGITS:
				case mdParser.STRING:
					{
					this.state = 158;
					this.string();
					}
					break;
				case mdParser.HEX:
					{
					this.state = 159;
					this.match(mdParser.HEX);
					}
					break;
				default:
					throw new NoViableAltException(this);
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
		this.enterRule(_localctx, 34, mdParser.RULE_frag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(mdParser.HASHTAG);
			this.state = 165;
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, mdParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16\xAC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x06\x02*\n\x02\r\x02\x0E\x02+\x03\x03" +
		"\x03\x03\x05\x030\n\x03\x03\x04\x03\x04\x06\x044\n\x04\r\x04\x0E\x045" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06F\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06K\n\x06\x03\x06\x03\x06\x05\x06O\n\x06\x05\x06Q\n\x06" +
		"\x03\x06\x05\x06T\n\x06\x03\x06\x05\x06W\n\x06\x03\x06\x05\x06Z\n\x06" +
		"\x03\x07\x03\x07\x03\b\x05\b_\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t" +
		"f\n\t\f\t\x0E\ti\v\t\x03\t\x03\t\x03\t\x03\t\x05\to\n\t\x03\n\x05\nr\n" +
		"\n\x03\n\x03\n\x03\n\x07\nw\n\n\f\n\x0E\nz\v\n\x03\v\x03\v\x03\f\x03\f" +
		"\x03\f\x07\f\x81\n\f\f\f\x0E\f\x84\v\f\x03\f\x05\f\x87\n\f\x03\r\x03\r" +
		"\x03\r\x05\r\x8C\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\x9A\n\x11\f\x11\x0E\x11" +
		"\x9D\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xA3\n\x12\x05\x12\xA5" +
		"\n\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02" +
		"\x04\x04\x02\n\n\r\r\x04\x02\x14\x14\x16\x16\x02\xAD\x02)\x03\x02\x02" +
		"\x02\x04/\x03\x02\x02\x02\x061\x03\x02\x02\x02\b:\x03\x02\x02\x02\nB\x03" +
		"\x02\x02\x02\f[\x03\x02\x02\x02\x0E^\x03\x02\x02\x02\x10n\x03\x02\x02" +
		"\x02\x12q\x03\x02\x02\x02\x14{\x03\x02\x02\x02\x16}\x03\x02\x02\x02\x18" +
		"\x88\x03\x02\x02\x02\x1A\x8F\x03\x02\x02\x02\x1C\x91\x03\x02\x02\x02\x1E" +
		"\x93\x03\x02\x02\x02 \x96\x03\x02\x02\x02\"\x9E\x03\x02\x02\x02$\xA6\x03" +
		"\x02\x02\x02&\xA9\x03\x02\x02\x02(*\x05\x04\x03\x02)(\x03\x02\x02\x02" +
		"*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,\x03\x03\x02\x02" +
		"\x02-0\x05\x06\x04\x02.0\x05\b\x05\x02/-\x03\x02\x02\x02/.\x03\x02\x02" +
		"\x020\x05\x03\x02\x02\x0213\x07\x03\x02\x0224\x07\x05\x02\x0232\x03\x02" +
		"\x02\x0245\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02" +
		"\x02\x0278\x05&\x14\x0289\x07\x13\x02\x029\x07\x03\x02\x02\x02:;\x07\b" +
		"\x02\x02;<\x05&\x14\x02<=\x07\t\x02\x02=>\x07\x06\x02\x02>?\x05\n\x06" +
		"\x02?@\x07\x07\x02\x02@A\x07\x13\x02\x02A\t\x03\x02\x02\x02BC\x05\f\x07" +
		"\x02CE\x07\f\x02\x02DF\x05\x18\r\x02ED\x03\x02\x02\x02EF\x03\x02\x02\x02" +
		"FG\x03\x02\x02\x02GJ\x05\x0E\b\x02HI\x07\n\x02\x02IK\x05\x14\v\x02JH\x03" +
		"\x02\x02\x02JK\x03\x02\x02\x02KP\x03\x02\x02\x02LN\x07\v\x02\x02MO\x05" +
		"\x16\f\x02NM\x03\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PL\x03" +
		"\x02\x02\x02PQ\x03\x02\x02\x02QS\x03\x02\x02\x02RT\x05\x1E\x10\x02SR\x03" +
		"\x02\x02\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02UW\x05$\x13\x02VU\x03" +
		"\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02XZ\x07\x13\x02\x02YX\x03" +
		"\x02\x02\x02YZ\x03\x02\x02\x02Z\v\x03\x02\x02\x02[\\\x07\x16\x02\x02\\" +
		"\r\x03\x02\x02\x02]_\x07\v\x02\x02^]\x03\x02\x02\x02^_\x03\x02\x02\x02" +
		"_`\x03\x02\x02\x02`a\x05\x10\t\x02a\x0F\x03\x02\x02\x02bg\x05&\x14\x02" +
		"cd\x07\x0E\x02\x02df\x05&\x14\x02ec\x03\x02\x02\x02fi\x03\x02\x02\x02" +
		"ge\x03\x02\x02\x02gh\x03\x02\x02\x02ho\x03\x02\x02\x02ig\x03\x02\x02\x02" +
		"jk\x07\b\x02\x02kl\x05\x12\n\x02lm\x07\t\x02\x02mo\x03\x02\x02\x02nb\x03" +
		"\x02\x02\x02nj\x03\x02\x02\x02o\x11\x03\x02\x02\x02pr\x07\r\x02\x02qp" +
		"\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02sx\x05&\x14\x02tu" +
		"\t\x02\x02\x02uw\x05&\x14\x02vt\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03" +
		"\x02\x02\x02xy\x03\x02\x02\x02y\x13\x03\x02\x02\x02zx\x03\x02\x02\x02" +
		"{|\x07\x14\x02\x02|\x15\x03\x02\x02\x02}\x82\x05&\x14\x02~\x7F\x07\v\x02" +
		"\x02\x7F\x81\x05&\x14\x02\x80~\x03\x02\x02\x02\x81\x84\x03\x02\x02\x02" +
		"\x82\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02" +
		"\x84\x82\x03\x02\x02\x02\x85\x87\x07\v\x02\x02\x86\x85\x03\x02\x02\x02" +
		"\x86\x87\x03\x02\x02\x02\x87\x17\x03\x02\x02\x02\x88\x8B\x05\x1A\x0E\x02" +
		"\x89\x8A\x07\n\x02\x02\x8A\x8C\x05\x1C\x0F\x02\x8B\x89\x03\x02\x02\x02" +
		"\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x07\x0F\x02\x02" +
		"\x8E\x19\x03\x02\x02\x02\x8F\x90\x05&\x14\x02\x90\x1B\x03\x02\x02\x02" +
		"\x91\x92\x05&\x14\x02\x92\x1D\x03\x02\x02\x02\x93\x94\x07\x10\x02\x02" +
		"\x94\x95\x05 \x11\x02\x95\x1F\x03\x02\x02\x02\x96\x9B\x05\"\x12\x02\x97" +
		"\x98\x07\x11\x02\x02\x98\x9A\x05\"\x12\x02\x99\x97\x03\x02\x02\x02\x9A" +
		"\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C" +
		"!\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA4\x05&\x14\x02\x9F\xA2" +
		"\x07\x12\x02\x02\xA0\xA3\x05&\x14\x02\xA1\xA3\x07\x15\x02\x02\xA2\xA0" +
		"\x03\x02\x02\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\x9F" +
		"\x03\x02\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5#\x03\x02\x02\x02\xA6\xA7" +
		"\x07\x04\x02\x02\xA7\xA8\x05&\x14\x02\xA8%\x03\x02\x02\x02\xA9\xAA\t\x03" +
		"\x02\x02\xAA\'\x03\x02\x02\x02\x17+/5EJNPSVY^gnqx\x82\x86\x8B\x9B\xA2" +
		"\xA4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mdParser.__ATN) {
			mdParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mdParser._serializedATN));
		}

		return mdParser.__ATN;
	}

}

export class MdContext extends ParserRuleContext {
	public mdItem(): MdItemContext[];
	public mdItem(i: number): MdItemContext;
	public mdItem(i?: number): MdItemContext | MdItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MdItemContext);
		} else {
			return this.getRuleContext(i, MdItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_md; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterMd) {
			listener.enterMd(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitMd) {
			listener.exitMd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
		if (visitor.visitMd) {
			return visitor.visitMd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MdItemContext extends ParserRuleContext {
	public title(): TitleContext | undefined {
		return this.tryGetRuleContext(0, TitleContext);
	}
	public link(): LinkContext | undefined {
		return this.tryGetRuleContext(0, LinkContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_mdItem; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterMdItem) {
			listener.enterMdItem(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitMdItem) {
			listener.exitMdItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
		if (visitor.visitMdItem) {
			return visitor.visitMdItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public MD_TITLE_TAG(): TerminalNode { return this.getToken(mdParser.MD_TITLE_TAG, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public WS(): TerminalNode { return this.getToken(mdParser.WS, 0); }
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
	public enterRule(listener: mdParserListener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public enterRule(listener: mdParserListener): void {
		if (listener.enterLink) {
			listener.enterLink(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitLink) {
			listener.exitLink(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public COLON_DOUBLE_SLASH(): TerminalNode { return this.getToken(mdParser.COLON_DOUBLE_SLASH, 0); }
	public host(): HostContext {
		return this.getRuleContext(0, HostContext);
	}
	public login(): LoginContext | undefined {
		return this.tryGetRuleContext(0, LoginContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(mdParser.COLON, 0); }
	public port(): PortContext | undefined {
		return this.tryGetRuleContext(0, PortContext);
	}
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(mdParser.SLASH, 0); }
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
	public enterRule(listener: mdParserListener): void {
		if (listener.enterUrl) {
			listener.enterUrl(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitUrl) {
			listener.exitUrl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
		if (visitor.visitUrl) {
			return visitor.visitUrl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemeContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(mdParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_scheme; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterScheme) {
			listener.enterScheme(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitScheme) {
			listener.exitScheme(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(mdParser.SLASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_host; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterHost) {
			listener.enterHost(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitHost) {
			listener.exitHost(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdParser.DOT);
		} else {
			return this.getToken(mdParser.DOT, i);
		}
	}
	constructor(ctx: HostnameContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterDomainNameOrIPv4Host) {
			listener.enterDomainNameOrIPv4Host(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitDomainNameOrIPv4Host) {
			listener.exitDomainNameOrIPv4Host(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public enterRule(listener: mdParserListener): void {
		if (listener.enterIPv6Host) {
			listener.enterIPv6Host(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitIPv6Host) {
			listener.exitIPv6Host(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public DOUBLE_COLON(): TerminalNode[];
	public DOUBLE_COLON(i: number): TerminalNode;
	public DOUBLE_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdParser.DOUBLE_COLON);
		} else {
			return this.getToken(mdParser.DOUBLE_COLON, i);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdParser.COLON);
		} else {
			return this.getToken(mdParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_v6host; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterV6host) {
			listener.enterV6host(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitV6host) {
			listener.exitV6host(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public enterRule(listener: mdParserListener): void {
		if (listener.enterPort) {
			listener.enterPort(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitPort) {
			listener.exitPort(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdParser.SLASH);
		} else {
			return this.getToken(mdParser.SLASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_path; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public AT(): TerminalNode { return this.getToken(mdParser.AT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(mdParser.COLON, 0); }
	public password(): PasswordContext | undefined {
		return this.tryGetRuleContext(0, PasswordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_login; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterLogin) {
			listener.enterLogin(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitLogin) {
			listener.exitLogin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public enterRule(listener: mdParserListener): void {
		if (listener.enterUser) {
			listener.enterUser(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitUser) {
			listener.exitUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public enterRule(listener: mdParserListener): void {
		if (listener.enterPassword) {
			listener.enterPassword(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitPassword) {
			listener.exitPassword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
		if (visitor.visitPassword) {
			return visitor.visitPassword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public QUESTION_MARK(): TerminalNode { return this.getToken(mdParser.QUESTION_MARK, 0); }
	public search(): SearchContext {
		return this.getRuleContext(0, SearchContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_query; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mdParser.AND);
		} else {
			return this.getToken(mdParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_search; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterSearch) {
			listener.enterSearch(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitSearch) {
			listener.exitSearch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(mdParser.EQUAL, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(mdParser.HEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_searchparameter; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterSearchparameter) {
			listener.enterSearchparameter(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitSearchparameter) {
			listener.exitSearchparameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
		if (visitor.visitSearchparameter) {
			return visitor.visitSearchparameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FragContext extends ParserRuleContext {
	public HASHTAG(): TerminalNode { return this.getToken(mdParser.HASHTAG, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mdParser.RULE_frag; }
	// @Override
	public enterRule(listener: mdParserListener): void {
		if (listener.enterFrag) {
			listener.enterFrag(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitFrag) {
			listener.exitFrag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
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
	public enterRule(listener: mdParserListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: mdParserListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mdParserVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


