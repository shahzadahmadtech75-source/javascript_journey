const prompt = require('prompt-sync')()
let num = Number(prompt("Enter a number: "))
let result;
if (isNaN(num)) {
  result = "Invalid input: Not a number";
}

else if (num % 2 === 0 && num % 3 === 0){
    result = "The number is divisible by 2 and 3";
}
else if(num % 2 === 0 && num % 3 !== 0){
    result = "The number is only divisible by 2";
}
else if(num % 2 !== 0 && num % 3 === 0){
    result = "The number is only divisible by 3";
}
else{
    result = "This number is not divisible by 2 and 3";
}
console.log("Checked:",result)