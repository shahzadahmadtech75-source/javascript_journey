const prompt = require('prompt-sync')()
let sum = 0;
let n = parseInt(prompt("Enter a number: "));
for (let i = 0; i<=n;i++){
    sum+=i
}
console.log('Sum of first ', +n+" natural numbers is",+sum);
console.log(i); //Here i cant be printed and shows i is not defined beacuse of declaring vaariable with let which is strict and blocked scope allows i to print inside the loop not outside


let Sum = 0;
let N = parseInt(prompt("Enter a number: "));
for (var i = 0; i<N;i++){
    Sum+=i+1
}
console.log('Sum of first ', +N+" natural numbers is",+Sum);
console.log(i);