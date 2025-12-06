//*  Say hello to user

function hello(name) {
    console.log("Hello " + name + "!");
}
hello("Shahzad");


//* Add two numbers
const prompt = require('prompt-sync')();
let n1 = Number.parseInt(prompt("Enter a number: "))
let n2 = Number.parseInt(prompt("Enter another number: "))

function sum(a, b) {
    return a + b
}
console.log('Sum is ', sum(n1, n2));


//* Checking even and odd number
function odd(o) {
    return o % 2 == 0 ? "This is an even number" : "This is an odd number"
}
console.log(odd(17));


// More solid example 
let user = prompt("Enter a number ");
user = Number.parseInt(user)
function even(n) {
    let check;
    if (n % 2 === 0) {
        check = ("This is an even number");
    } else {

        check = ("This is an odd number");
    }
    return (check);

}
if (isNaN(user)) {
    console.log('Enter a valid number: Thanks!');

}
else {
    console.log(even(user))
}


//* Printing sqUARE OF a number
let num = Number.parseInt(prompt("Enter a number "));
function square(num) {
    return num ** 2

}
power = isNaN(num) ? console.log("Enter a valid number ") : console.log('Square of ' + num + " is ", square(num));