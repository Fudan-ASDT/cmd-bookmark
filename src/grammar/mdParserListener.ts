// Generated from src/grammar/mdParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DomainNameOrIPv4HostContext } from "./mdParser";
import { IPv6HostContext } from "./mdParser";
import { MdContext } from "./mdParser";
import { MdItemContext } from "./mdParser";
import { TitleContext } from "./mdParser";
import { LinkContext } from "./mdParser";
import { UrlContext } from "./mdParser";
import { SchemeContext } from "./mdParser";
import { HostContext } from "./mdParser";
import { HostnameContext } from "./mdParser";
import { V6hostContext } from "./mdParser";
import { PortContext } from "./mdParser";
import { PathContext } from "./mdParser";
import { LoginContext } from "./mdParser";
import { UserContext } from "./mdParser";
import { PasswordContext } from "./mdParser";
import { QueryContext } from "./mdParser";
import { SearchContext } from "./mdParser";
import { SearchparameterContext } from "./mdParser";
import { FragContext } from "./mdParser";
import { StringContext } from "./mdParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `mdParser`.
 */
export interface mdParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `DomainNameOrIPv4Host`
	 * labeled alternative in `mdParser.hostname`.
	 * @param ctx the parse tree
	 */
	enterDomainNameOrIPv4Host?: (ctx: DomainNameOrIPv4HostContext) => void;
	/**
	 * Exit a parse tree produced by the `DomainNameOrIPv4Host`
	 * labeled alternative in `mdParser.hostname`.
	 * @param ctx the parse tree
	 */
	exitDomainNameOrIPv4Host?: (ctx: DomainNameOrIPv4HostContext) => void;

	/**
	 * Enter a parse tree produced by the `IPv6Host`
	 * labeled alternative in `mdParser.hostname`.
	 * @param ctx the parse tree
	 */
	enterIPv6Host?: (ctx: IPv6HostContext) => void;
	/**
	 * Exit a parse tree produced by the `IPv6Host`
	 * labeled alternative in `mdParser.hostname`.
	 * @param ctx the parse tree
	 */
	exitIPv6Host?: (ctx: IPv6HostContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.md`.
	 * @param ctx the parse tree
	 */
	enterMd?: (ctx: MdContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.md`.
	 * @param ctx the parse tree
	 */
	exitMd?: (ctx: MdContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.mdItem`.
	 * @param ctx the parse tree
	 */
	enterMdItem?: (ctx: MdItemContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.mdItem`.
	 * @param ctx the parse tree
	 */
	exitMdItem?: (ctx: MdItemContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.link`.
	 * @param ctx the parse tree
	 */
	enterLink?: (ctx: LinkContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.link`.
	 * @param ctx the parse tree
	 */
	exitLink?: (ctx: LinkContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.scheme`.
	 * @param ctx the parse tree
	 */
	enterScheme?: (ctx: SchemeContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.scheme`.
	 * @param ctx the parse tree
	 */
	exitScheme?: (ctx: SchemeContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.host`.
	 * @param ctx the parse tree
	 */
	enterHost?: (ctx: HostContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.host`.
	 * @param ctx the parse tree
	 */
	exitHost?: (ctx: HostContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.hostname`.
	 * @param ctx the parse tree
	 */
	enterHostname?: (ctx: HostnameContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.hostname`.
	 * @param ctx the parse tree
	 */
	exitHostname?: (ctx: HostnameContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.v6host`.
	 * @param ctx the parse tree
	 */
	enterV6host?: (ctx: V6hostContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.v6host`.
	 * @param ctx the parse tree
	 */
	exitV6host?: (ctx: V6hostContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?: (ctx: PortContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?: (ctx: PortContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.login`.
	 * @param ctx the parse tree
	 */
	enterLogin?: (ctx: LoginContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.login`.
	 * @param ctx the parse tree
	 */
	exitLogin?: (ctx: LoginContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.user`.
	 * @param ctx the parse tree
	 */
	enterUser?: (ctx: UserContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.user`.
	 * @param ctx the parse tree
	 */
	exitUser?: (ctx: UserContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.password`.
	 * @param ctx the parse tree
	 */
	enterPassword?: (ctx: PasswordContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.password`.
	 * @param ctx the parse tree
	 */
	exitPassword?: (ctx: PasswordContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.search`.
	 * @param ctx the parse tree
	 */
	enterSearch?: (ctx: SearchContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.search`.
	 * @param ctx the parse tree
	 */
	exitSearch?: (ctx: SearchContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.searchparameter`.
	 * @param ctx the parse tree
	 */
	enterSearchparameter?: (ctx: SearchparameterContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.searchparameter`.
	 * @param ctx the parse tree
	 */
	exitSearchparameter?: (ctx: SearchparameterContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.frag`.
	 * @param ctx the parse tree
	 */
	enterFrag?: (ctx: FragContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.frag`.
	 * @param ctx the parse tree
	 */
	exitFrag?: (ctx: FragContext) => void;

	/**
	 * Enter a parse tree produced by `mdParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `mdParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

