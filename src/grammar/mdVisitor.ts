// Generated from src/grammar/md.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DomainNameOrIPv4HostContext } from "./mdParser";
import { IPv6HostContext } from "./mdParser";
import { MdContext } from "./mdParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mdParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface mdVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `DomainNameOrIPv4Host`
	 * labeled alternative in `mdParser.hostname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomainNameOrIPv4Host?: (ctx: DomainNameOrIPv4HostContext) => Result;

	/**
	 * Visit a parse tree produced by the `IPv6Host`
	 * labeled alternative in `mdParser.hostname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIPv6Host?: (ctx: IPv6HostContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.md`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMd?: (ctx: MdContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.title`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitle?: (ctx: TitleContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.link`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLink?: (ctx: LinkContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrl?: (ctx: UrlContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.scheme`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScheme?: (ctx: SchemeContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost?: (ctx: HostContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.hostname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHostname?: (ctx: HostnameContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.v6host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitV6host?: (ctx: V6hostContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort?: (ctx: PortContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.login`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogin?: (ctx: LoginContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.user`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUser?: (ctx: UserContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.password`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassword?: (ctx: PasswordContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.search`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearch?: (ctx: SearchContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.searchparameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchparameter?: (ctx: SearchparameterContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.frag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrag?: (ctx: FragContext) => Result;

	/**
	 * Visit a parse tree produced by `mdParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
}

