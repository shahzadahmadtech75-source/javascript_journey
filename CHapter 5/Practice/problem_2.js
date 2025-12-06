const prompt = require('prompt-sync')();

arr = []

while(1){

let user = Number.parseInt(prompt("Enter number "))
if (user == 0){
    console.log("Your array is created");
    break;
}
arr += user;
}
let newarray = Array.from(arr)
console.log(newarray);

