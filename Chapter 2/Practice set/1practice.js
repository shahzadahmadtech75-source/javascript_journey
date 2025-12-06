const prompt = require('prompt-sync')()
let age  = Number(prompt("Enter your age: "))

if (age >= 10 && age <= 20){
    console.log('Your age is between 10 and 20 which is ',age);
}
else{
    console.log('Your age is not between 10 and 20 which is',age);
}