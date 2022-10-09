parser grammar mdParser;

options {
   tokenVocab  =  mdLexer  ;
}

md : mdItem+;
mdItem: title | link  ;

/**
 * # string
 */
title :  MD_TITLE_TAG SPACE+ string WS ;

/**
 * \[string\](url)
 */
link  :   LSBRACKET string RSBRACKET LRBRACKET url RRBRACKET WS;


/**
* scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]
*/
url   : scheme COLON_DOUBLE_SLASH login? host (COLON port)? (SLASH path?)? query? frag? WS?  ;
scheme: STRING  ;
host  : SLASH? hostname ;

hostname
   : string (DOT string)*   #DomainNameOrIPv4Host
   | LSBRACKET v6host RSBRACKET         #IPv6Host
   ;

v6host  : DOUBLE_COLON? string ((COLON|DOUBLE_COLON) string)* ;

port    : DIGITS  ;
path    : string (SLASH string)* SLASH?   ;

login   : user (COLON password)? AT ;
user    : string    ;
password: string    ;

query   : QUESTION_MARK search   ;
search  : searchparameter (AND searchparameter)*    ;
searchparameter : string (EQUAL (string | HEX))? ;

frag    : HASHTAG string ;

string  : STRING | DIGITS;
