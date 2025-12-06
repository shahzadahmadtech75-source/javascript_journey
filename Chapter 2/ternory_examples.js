const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number: "));

console.log(number>0? "This is a positive number" : 'This is a negative number');

// Another way

let number1 = Number(prompt("Enter a number: "));
let number_checker = number1 == 0? "This is zero — neither positive nor negative" :
                     number1 > 0? "This is a positive number":
                     number1 < 0? "This is a negative number":
                     "Enter a valid number"
console.log(number_checker)


// Exmaple No:2
let letter = prompt("Enter an alphabet: ")
let checker = letter == 'a'|| letter =='e' || letter =='i' || letter =='o' || letter =='u'? "This is a vowel":
letter !='a'&& letter !='e' && letter !='i' && letter !='o' && letter !='u'? 
"This is a consonant" : 
 "Enter a valid alphabet Thanks you"
console.log(checker);
