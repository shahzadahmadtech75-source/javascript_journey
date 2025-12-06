//! Strings are immutable .The stings return after methods are new strings the original string cant be changed

let string = "Shahzad Ahmad";
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.slice(3,9)); //* This method give a slice of the string from index 3(included)to index 9(not included)

console.log(string.slice(4)); //* if passes one index then it will print the string from given index to last .

console.log(string.replaceAll("a","e")); //*Use to change all occurances
console.log(string.replace("Ahmad","Ali")); //*This replaces ahmad to ali
let teacher = "Abdul khadi"
console.log((string.concat(` is the student of ${teacher}`))) //* This method joins extra text or whatever we want to the given string

let boy = "           Gulkhan            ";
console.log(boy.trim()); //? This method remove all the spaces before and after the string
console.log(string);
//quiz
let newstring = "";
for (let i = 0;i<string.length;i++){
    console.log(string[i]);
    // newstring= string[i] + newstring; //* this make reverse string
    newstring += string[i]
}
console.log(newstring);
