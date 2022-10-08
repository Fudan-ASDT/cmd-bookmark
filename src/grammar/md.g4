grammar md;

md  : (title link+)+;

title   :   HASHTAG+ SPACE+ string WS;
HASHTAG :   '#' ;
SPACE :  ' ';

/**
 * scheme:\[string\](url)
 */
link    :   LSBRACKET string RSBRACKET LRBRACKET url RRBRACKET WS;

LRBRACKET   :   '(' ;
RRBRACKET   :   ')' ;
LSBRACKET   :   '[' ;
RSBRACKET   :   ']' ;

/**
* scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]
*/
url : scheme '://' login? host (':' port)? ('/' path?)? query? frag? WS?    ;
scheme  : string    ;
host    : '/'? hostname ;

hostname
   : string ('.' string)*   #DomainNameOrIPv4Host
   | '[' v6host ']'         #IPv6Host
   ;

v6host  : '::'? (string | DIGITS) ((':'|'::') (string | DIGITS))*   ;

port    : DIGITS    ;
path    : string ('/' string)* '/'? ;

login   : user (':' password)? '@'  ;
user    : string    ;
password    : string    ;

query   : '?' search    ;
search  : searchparameter ('&' searchparameter)*    ;
searchparameter : string ('=' (string | DIGITS | HEX))? ;

frag    : '#' (string | DIGITS) ;
WS  : [\r\n] +  ;

string  : STRING | DIGITS   ;
DIGITS  : [0-9] +   ;
HEX : ('%' [a-fA-F0-9] [a-fA-F0-9]) +   ;
STRING  : ([a-zA-Z~0-9] | HEX) ([a-zA-Z0-9.+-] | HEX)*  ;
