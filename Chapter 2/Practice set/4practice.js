const prompt = require('prompt-sync')();
//Direct method
let age = Number(prompt("Enter your age: "));
console.log(age >= 18? "You can drive" : "You cant drive");

//Through variable finding
let age1 = Number(prompt("Enter your age: "));
let check = age1>=18? "You can drive" :
             "You cant drive"
console.log(check);

