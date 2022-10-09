lexer grammar mdLexer;

MD_TITLE_TAG    :   HASHTAG+    ;
HASHTAG  :  '#';
SPACE :  ' ';

LRBRACKET   :   '(' ;
RRBRACKET   :   ')' ;
LSBRACKET   :   '[' ;
RSBRACKET   :   ']' ;

COLON   :   ':' ;
SLASH   :   '/' ;
COLON_DOUBLE_SLASH  :   COLON SLASH SLASH   ;
DOUBLE_COLON    :   '::'    ;
DOT :   '.' ;
AT  :   '@' ;
QUESTION_MARK   :   '?' ;
AND :   '&' ;
EQUAL   :   '=' ;

WS  : [\r\n] +  ;
DIGITS  : [0-9] +   ;
HEX : ('%' [a-fA-F0-9] [a-fA-F0-9]) +   ;
STRING  : ([a-zA-Z~0-9] | HEX) ([a-zA-Z0-9.+-] | HEX | '_' | ' ')*  ;
