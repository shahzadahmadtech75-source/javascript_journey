const prompt = require('prompt-sync')();
// Finding greatest number
let n1 = Number.parseInt(prompt("Enter  number "));
let n2 = Number.parseInt(prompt("Enter  another number "));
const greater = (a, b) => {
    let greater_number;

    if (a > b) {
        greater_number = a;
    } else {
        greater_number = b;
    }
    return greater_number

}
let g = (greater(n1, n2));
console.log(g + ' is greater number');

//celcius to farehiet converter
let user = Number.parseInt(prompt("Enter temperature in celcius "));

const converter = (d) => {
    return (d * 9 / 5) + 32;
}
let temperature = converter(user);
console.log(`Temperature in fareheit is ${temperature}`);

// Vowel checker
let input = prompt("Enter an alphabet ");
const vowel = (alpha) => {
    alpha = alpha.toLowerCase();
    let vowel_checker;
    if (alpha === "a" || alpha === "e" || alpha === "i" || alpha === "o" || alpha === "u") {
        vowel_checker = `${alpha} is a vowel. `
    } else {
        vowel_checker = `${alpha} is a consonant. `
    }
    return vowel_checker;
}
let letter = vowel(input);
console.log(letter);

//Factorial 
let number = Number.parseInt(prompt("Enter a number "));
const factorial = (n) => {
    let i = 1;
    let factorial = 1;    
    
    while (i <= n) {
        factorial = factorial * i;
        i = i + 1;
    }
    return factorial;
}
if(number<0){
    console.log("Factorials for negative numbers are not defined1"); 
}
else if(isNaN(number)){
    console.log("Enter a valid number!"); 
}else{
    let f = factorial(number);
console.log(`Factorial of ${number} is ${f}`);
}

