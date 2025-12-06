/* In while loop first condition is checked if true it executes then vice versa
*/
const prompt = require('prompt-sync')();
let user = prompt("Enter a number: ");
user = Number.parseInt(user);
let i = 0;
let sum = 0;
while (i <= user) {
    sum += i
    i += 1
}
console.log("Sum is ", sum);

// Factorial
let n = prompt("ENTER A number: ");
n = Number.parseInt(n);
let factorial = 1;
let j = 1;
while (j < n) {
    factorial = factorial * j;
    j = j + 1
}
console.log("factorial is: ", factorial);

// Even checker
let input = prompt("Enter a number: ");
input = Number.parseInt(input);
let k = 0;
while (k<=input) {
    if (k%2 == 0){
        console.log(k,"is even");
        
    }
    k++;
}
let number = prompt("Enter a number: ");
number = Number.parseInt(number);
console.log('         Multiplication Of  ',number);
let v = 1;
while(v<=10){
    let table =(number*v) 
    console.log( number," x ",v," = ",table);
    v++;
   
}

let slices = prompt("Enter slices you eat: ");
slices = Number.parseInt(slices)
console.log('     You total slices       ');
let slice = 0;
while(slice<=slices){
    console.log('you eat slice no: ',slice);
    slice++
    
}