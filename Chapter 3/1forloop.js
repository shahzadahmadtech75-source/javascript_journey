const prompt = require('prompt-sync')()
// for (variable initialization ; codition; increment or decrement){console }
let sum = 0;
let n = parseInt(prompt("Enter a number: "));
for (let i = 0; i < n; i = i + 1) {
    console.log(i + 1, "+")
    sum += i + 1
}
console.log("Sum of first " + n + " natural numbers is " + sum) //( + n + : adds two strings side by side so: result= sum of first 5 natural numbers is 15: if we enter 5 the input is also converted into string and output also and all statements are combined in one string)
// Factorial
let factorial = 1;
let user = parseInt(prompt("Enter a number: "));
for (let j = 1; j < user; j = j + 1) {
    console.log(j + 1, "*");
    factorial *= j + 1
}
console.log("Factorial of first " + user + " natural numbers is " + factorial)
console.log(j)

//Even numbers

for (let k = 0; k <= 100; k++) {
    if (k % 2 == 0) {
        console.log("The number", +k + " is even")
    }
}

for(let l = 0;l<=100;l++){
    if (l%2!=0){
        console.log("The number " +l+ " is an odd number")
    }
}
