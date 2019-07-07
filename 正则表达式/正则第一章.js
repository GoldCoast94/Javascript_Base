/*正则表达式字符匹配攻略*/

//1.两种模糊匹配
var regex = /hello/;
console.log(regex.test('hello'));

//1.1横向模糊匹配
var regex = /ab{2,5}c/g;
var string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';
console.log(string.match(regex));
//1.2纵向模糊匹配
var regex = /a[123]c/g;
var string = 'a1c a2c a3c a4c';
console.log(string.match(regex));

/*字符组*/             //虽然叫字符组但是只匹配其中一个字符

//2.1范围表示法
/*如果字符较多的话，可以使用连字符-来省略和简写，例如：
[123456789defghijkLMNOPQRST] =>   [1-9d-kL-T]

注意：如果要匹配'a',-,'z',要写成[-az]或[az-]或[a\-z]
*/

//2.2排除字符组
/*例如:[^abc]就表示一个除'a','b','c'之外的任意一个字符,
字符组第一个放^(脱字符),表示求反的概念*/

//2.3常见的简写形式
/*
\d就是[0-9],表示一位数字。
\D就是[^0-9],表示除数字外的任意字符
\w就是[0-9a-zA-Z_]表示数字，大小写字母和下划线
\W就是[^0-9a-zA-Z_]表示非单词字符
\s[\t\v\n\r\f]表示空白符，包括空格、水平制表符、垂直制表符、换行符、回车符、换页符。
\S[^\t\v\n\r\f]表示非空白符。


注意：如果要匹配任意字符组可以使用[\d\D]、[\w\W]、[\s\S]中的一个。
 */


/*量词*/

/*
3.1简写形式
{m,}=>表示至少出现m次
{m}=>表示出现m次
？ 等价于{0,1}=>表示出现或者不出现
+ 等价于{1,}=>表示出现至少一次
* 等价于{0,}=>表示出现任意次，有可能不出现
 */

/*3.2 贪婪匹配和惰性匹配*/

//贪婪匹配
var regex = /\d{2,5}/g;
var string = '1234 123 12345 123456';
console.log(string.match(regex));

//惰性匹配
var regex = /\d{2,5}?/g;
var string = '1234 123 12345 123456';
console.log(string.match(regex));                 
//通过在量词后面加问号就能实现惰性匹配

//=> ["12","34","12","12","34","12","34","56"]

/*多选分支*/
//具体如：(p1|p2|p3) 用|管道符进行分隔，表示其中任何之一
var regex = /good|nice/g;
var string = 'good idea,nice try';
console.log(string.match(regex));

var regex = /good|goodbye/g;
var string = 'goodbye';
console.log(string.match(regex));
              //分支结构也是惰性的
var regex = /goodbye|good/g;
var string = 'goodbye';
console.log(string.match(regex));

/*匹配16进制颜色值*/

var regex = /#[0-9a-zA-Z]{6}|#[0-9a-zA-Z]{3}/g;
var string = '#ffbbab #Fc01de #fff #eee';
console.log(string.match(regex));       
/*[#ffbbab #Fc01de #fff #eee]    分支结构是惰性的*/

/*匹配时间*/
var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log(regex.test('12:12'));
console.log(regex.test('05:59'));
console.log(regex.test('20:39'));

//如果要求匹配7:9
var regex = /^(0?[0-9]|[1][0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
console.log(regex.test('7:9'));
console.log(regex.test('02:07'));
console.log(regex.test('23:59'));

/*匹配日期*/
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
console.log(regex.test("2017-06-10"));

/*匹配windows操作系统的文件路径*/

/*例如
F:\study\javascript\regex\regular expression.pdf
F:\study\javascript\regex
F:\study\javascript
F:\
*/

var regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
console.log(regex.test(`F:\\study\\javascript\\regex\\regular expression.pdf`));
console.log(regex.test(`F:\\study\\javascript\\regex`));
console.log(regex.test(`F:\\study\\javascript`));
console.log(regex.test(`F:\\`));


/*匹配ID*/
var regex = /id="[^"]*"/;

var string = `<div id="container" class="main"></div>`;

console.log(string.match(regex)[0]);
console.log(string.match(regex));
