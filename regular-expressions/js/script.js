"use strict";


// window.onload = function() {
//
//     let str = "I love JavaScript!";
//
//     let regexp = /love/;
//     console.log(str.search(regexp));
//
//     let substr = 'love';
//     console.log(str.search(substr));
//
// }


// window.onload = function() {
//     let search = prompt("What you want to search?", "love");
//     let regexp = new RegExp(search);
//
//     // find whatever the user wants
//     console.log("I love JavaScript".search(regexp));
// }


// window.onload = function() {
//
//     let str = "I love JavaScript!";
//     console.log(str.search(/LOVE/));
//     console.log(str.search(/LOVE/i));
//
// }


/*
Methods of RegExp and String
*/
// window.onload = function() {
//
//     let str = "Fame is the thirst of youth";
//     let result = str.match( /fame/i );
//
//     console.log(result[0]);
//     console.log(result.index);
//     console.log(result.input);
//
// }



// window.onload = function() {
//
//     let str = "JavaScript is a programming language";
//
//     let result = str.match( /JAVA(SCRIPT)/i );
//
//     console.log(result[0]);
//     console.log(result[1]);
//     console.log(result.index);
//     console.log(result.input);
//
// }


// window.onload = function() {
//
//     // let str = "HO-Ho-ho!";
//     //
//     // let result = str.match( /ho/ig );
//     //
//     // console.log(result );
//
//
//     let str = "HO-Ho-ho!";
//
//     let result = str.match( /h(o)/ig );
//
//     console.log(result );
//
// }
// So, with g flag the result is a simple array of matches.
// No additional properties.



/*
Character classes
*/
// For instance, CSS\d matches a string CSS with a digit after it:
// window.onload = function() {
//
//     // let str = "CSS4 is cool";
//     // let reg = /CSS\d/
//     //
//     // console.log(str.match(reg));
//     //
//     // console.log("I love HTML5!".match(/\s\w\w\w\w\d/));
//
//
//     // console.log("Hello, Java!".match(/\bJava\b/));
//     // console.log("Hello, JavaScript!".match(/\bJava\b/));
//     // console.log("Hello, JavaScript!".match(/Java/));
//
//
//
//
//     console.log("Hello, Java!".match(/\bHello\b/));
//     console.log("Hello, Java!".match(/\bJava\b/));
//
//     // because there’s no word boundary after l
//     console.log("Hello, Java!".match(/\bHell\b/));
//
//     // because the exclamation sign is not a wordly character,
//     // so there’s no word boundary after it
//     console.log("Hello, Java!".match(/\bJava!\b/));
//
// }


// window.onload = function() {
//
//     // console.log("1 23 456 78".match(/\b\d\d\b/g));
//
//     // let str = "+7(903)-123-45-67";
//     //
//     // console.log(  str.match(/\d/g).join('') );
//     // console.log(  str.replace(/\D/g, '') );
//
//
//     // console.log("1 - 5".match(/\d-\d/));
//     // console.log("1 - 5".match(/\d - \d/));
//     // console.log("1-5".match(/\d - \d/));
//
//     console.log("Z".match(/./));
//
//     let reg = /CS.4/;
//
//     console.log("CSS4".match(reg));
//     console.log("CS-4".match(reg));
//     console.log("CS 4".match(reg));
//
// }




// window.onload = function() {
//
//     let str = "Breakfast at 09:00 in the room 123:456.";
//
//     console.log(str.match(/\b\d\d:\d\d\b/));
//
// }



/*
Escaping, special characters
*/
// window.onload = function() {
//
//     // To use a special character as a regular one, prepend it with a backslash.
//
//     // console.log("Chapter 5.1".match(/\d\.\d/));
//     // console.log("function g()".match(/g\(\)/));
//     // console.log("1\\2".match(/\\/));
//
//
//
//     // console.log("/".match(/\//));
//     //
//     // console.log("/".match(new RegExp("/")));
//
//
//     let regStr = "\\d\\.\\d";
//     // alert(regStr); // \d\.\d (correct now)
//     console.log(regStr);
//
//     let reg = new RegExp(regStr);
//     console.log("Chapter 5.1".match(reg));
//
// }




/*
Sets and ranges [...]
*/
// window.onload = function() {
//
//     console.log("Mop top".match(/[tm]op/gi));
//     console.log("Voila".match(/V[oi]la/));
//     console.log("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g));
//     console.log("alice15@gmail.com".match(/[^\d\sA-Z]/gi));
//
//
//     let reg = /[-().^+]/g;
//
//
//     console.log("1 + 2 - 3".match(reg));
// }


// window.onload = function() {
//
//     console.log("Java".match( /Java[^script]/) );
//     console.log("JavaScript".match( /Java[^script]/) );
//
// }



// window.onload = function() {
//
//     let reg = /\d\d[:-]\d\d/g;
//
//
//     console.log("Breakfast at 09:00. Dinner at 21-30".match(reg));
//
// }


// The unicode flag
// window.onload = function() {
//
//     console.log('𝒳'.match(/[𝒳𝒴]/));
//     console.log('𝒳'.match(/[𝒳𝒴]/u));
//
//     // console.log('𝒳'.match(/[𝒳-𝒴]/)); error
//
//     console.log('𝒴'.match(/[𝒳-𝒵]/u));
//
// }


/*
Quantifiers +, *, ? and {n}
*/

// window.onload = function() {
//
//     console.log("I'm 12345 years old".match(/\d{5}/));
//
//
//     // To find numbers from 3 to 5 digits
//     // we can put the limits into figure brackets: \d{3,5}
//     console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/));
//
//
//     //  Then a regexp \d{3,} looks for numbers of 3 and more digits:
//
//     console.log("I'm not 12, but 345678 years old".match(/\d{3,}/));
//
//
//     let str = "+7(903)-123-45-67";
//
//     let numbers = str.match(/\d{1,}/g);
//
//
//
//     console.log(numbers);
//
// }



// window.onload = function() {
//     // +
//     // Means “one or more”, the same as {1,}.
//     // let str = "+7(903)-123-45-67";
//     //
//     // console.log(str.match(/\d+/g));
//
//
//     // let str = "Should I write color or colour?";
//     //
//     // console.log(str.match(/colou?r/g));
//
//     // * Means “zero or more”
//     // console.log("100 10 1".match(/\d0*/g));
//     //
//     // // '+' (one or more):
//     // console.log("100 10 1".match(/\d0+/g));
//
//     // Regexp “decimal fraction” (a number with a floating point): \d+\.\d+
//     console.log("0 1 12.345 7890".match(/\d+\.\d+/g));
//
//     console.log("<body> ... </body>".match(/<[a-z]+>/gi));
//
//
//     console.log("<h1>Hi!</h1>".match(/<[a-z][a-z0-9]*>/gi));
//     console.log("<body> ... </body>".match(/<[a-z][a-z0-9]*>/gi));
//
//
//     console.log("<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]*>/gi));
//
//
// }



// How to find an ellipsis "..." ?
// window.onload = function() {
//
//     let reg = /\.{3,}/g;
//
//     console.log("Hello!... How goes?.....".match(reg));
//
// }


// Regexp for HTML colors

// window.onload = function() {
//
//     let reg = /#[a-f0-9]{6}\b/gi;
//
//     let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
//
//     console.log(str.match(reg));
//
// }

/*
Greedy and lazy quantifiers
*/

// Greedy search
// window.onload = function() {
//     let reg = /".+"/g;
//
//     let str = 'a "witch" and her "broom" is one';
//
//     console.log(str.match(reg));
// }


// Lazy mode
// The lazy mode of quantifier is an opposite to the greedy mode.
// It means: “repeat minimal number of times”.

// window.onload = function() {
//
//     let reg = /".+?"/g;
//
//     let str = 'a "witch" and her "broom" is one';
//
//     console.log(str.match(reg));
//
//     console.log("123 456".match(/\d+ \d+?/g));
//
// }



// Alternative approach
// window.onload = function() {
//
//  // let reg = /"[^"]+"/g;
//  //
//  // let str = 'a "witch" and her "broom" is one';
//  //
//  // console.log(str.match(reg));
//
//
//  // let str = '...<a href="link" class="doc">...';
//  // let reg = /<a href=".*" class="doc">/g;
//  //
//  // console.log(str.match(reg));
//
//
//  let str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
//  let reg = /<a href=".*?" class="doc">/g;
//
//
//  console.log(str.match(reg));
//
// }



// A match for /d+? d+?/
// window.onload = function() {
//
//     console.log("123 456".match(/\d+? \d+?/g)); // ["123 4"]
//
// }


// Find HTML comments

// window.onload = function() {
//
//     let reg = /<!--[\s\S]*?-->/g;
//
//     let str = `... <!-- My -- comment
//     test --> ..  <!----> ..
//     `;
//
//     console.log(str.match(reg));
//
// }


// Find HTML tags

// window.onload = function() {
//
//     let reg = /<[^<>]+>/g;
//
//     let str = '<> <a href="/"> <input type="radio" checked> <b>';
//
//     console.log(str.match(reg));
//
// }



/*
Capturing groups
*/


// window.onload = function() {
//
//     // console.log('Gogogo now!'.match(/(go)+/i));
//
//     // let reg = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}/g;
//     //
//     // console.log("my@mail.com @ his@site.com.uk".match(reg));
//
//     // let str = '<h1>Hello, world!</h1>';
//     // let reg = /<(.*?)>/;
//     //
//     // console.log(str.match(reg));
//
//
//     let str = '<h1>Hello, world!</h1>';
//
//     // two matches: opening <h1> and closing </h1> tags
//     let reg = /<(.*?)>/g;
//
//     let match;
//
//     while (match = reg.exec(str)) {
//         // first shows the match: <h1>,h1
//         // then shows the match: </h1>,/h1
//
//
//         console.log(match);
//     }
//
// }



// Nested groups
// window.onload = function() {
//
//     // let str = '<span class="my">';
//     //
//     // let reg = /<(([a-z]+)\s*([^>]*))>/;
//     //
//     // let result = str.match(reg);
//     //
//     // console.log(result);
//
//
//     let match = 'a'.match(/a(z)?(c)?/);
//
//     console.log(match);
//
// }



// Find color in the format #abc or #abcdef
// window.onload = function() {
//
//     let reg = /#([a-f0-9]{3}){1,2}\b/gi;
//
//     let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
//
//     console.log(str.match(reg));
//
// }



// Find positive numbers

// window.onload = function() {
//
//     let reg = /[1-9]\d*(\.\d+)?/g;
//
//     let str = "1.5 0 -5 12. 123.4.";
//
//     console.log(str.match(reg));
//
// }


// Find all numbers

// window.onload = function() {
//
//     let reg = /-?\d+(\.\d+)?/g;
//
//     let str = "-1.5 0 2 -123.4.";
//
//     console.log(str.match(reg));
//
// }

// Parse an expression
// window.onload = function() {
//     function parse(expr) {
//         let reg = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
//
//         let result = expr.match(reg);
//
//         if (!result) return [];
//         result.shift();
//
//         return result;
//     }
//     console.log(parse("-1.23 * 3.45"));
// }


/*
Alternation (OR) |
*/

// window.onload = function() {
//
//     let reg = /Java(Script)?|C(\+\+)?|PHP/g;
//
//     console.log("Java JavaScript PHP C++ C".match(reg));
//
// }


// // Find bbtag pairs
// window.onload = function() {
//
//     let reg = /\[(b|url|quote)\][\s\S]*?\[\/\1\]/g;
//
//     let str = `
//     [b]hello![/b]
//     [quote]
//     [url]http://google.com[/url]
//     [/quote]
//     `;
//
//     console.log(str.match(reg));
//
// }


// Find quoted strings

// window.onload = function() {
//
//     let reg = /"(\\.|[^"\\])*"/g;
//     let str = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';
//
//
//     console.log(str.match(reg));
//
// }


// Find the full tag
// window.onload = function() {
//
//     let reg = /<style(>|\s.*?>)/g;
//
//
//
//     console.log('<style> <styler> <style test="...">'.match(reg));
//
// }


// String start ^ and finish $


// window.onload = function() {
//
//     let reg = /^[0-9a-fA-F]{2}(:[0-9a-fA-F]{2}){5}$/i;
//
//     console.log(reg.test('01:32:54:67:89:AB'));
//     console.log(reg.test('0132546789AB'));
//     console.log(reg.test('01:32:54:67:89'));
//     console.log(reg.test('01:32:54:67:89:ZZ'));
//
//
// }


// Multiline mode, flag "m"


window.onload = function() {

    

}








































//
