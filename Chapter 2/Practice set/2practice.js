// Determination of switch case in JavaScript
const prompt = require('prompt-sync')();
let n1 = Number(prompt("Enter  a number: "));
let operator = (prompt("Enter an operator (+,-,*,/): "));

let n2 = Number(prompt("Enter another  number: "));
let result;
switch (operator) {
    case '+':
        result = n1 + n2;
        break
    case '-':
        result = n1 - n2;
        break
    case '*':
        result = n1 * n2;
        break
    case '/':
        if (n2 == 0) {
            result = "Error division :Undefined number"
        } else {
            result = n1 / n2;
        }

        break;

    default:
        result = "Invalid operator. Please use +, -, *, or /.";

}
console.log('Result = ', result);