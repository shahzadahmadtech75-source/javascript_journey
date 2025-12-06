const prompt = require('prompt-sync')();

// ternary operators are the shortcut method of writing else if 
/* Syntax:
condition? expressions or result :(this colon means else) expression*/
console.log("❓ Is the condition true✅ Yes → do this❌ No → do that")
let names = prompt("Enter your name");
console.log(names != "shahzad" ? "Your name is not shahzad" : "hi shahzad welcome to javascript")

// Multiple conditions
let score = prompt("Enter your score: ");
let grade = score >=90? "A" :
            score >=80? "B" :
            score >=70? "C" :
            score >=60? "D" : "E";

console.log("Grade:", grade);

// NOte if there are more than four conditions we have to use switch or if else statements 