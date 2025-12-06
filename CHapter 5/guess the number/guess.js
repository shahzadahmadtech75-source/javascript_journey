const prompt = require('prompt-sync')();
let score = 0;

let win = 0;
let user;
let min = 10;
let max = 100;
let secret = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("         You have 15 chances to guess the secret number")
for (let attempt = 1;attempt<=15;attempt++){
    console.log('Attempt: ',attempt );
user = Number.parseInt(prompt("Guess the number: "))   

    if (isNaN(user)){
        console.log("Please guess a valid number ");
        
    }
    else if (user<min || user>max){
        console.log('Enter a value between 10 and 100');
    }

    else  if(user === secret){
        win = 1;
        console.log("Congratulation you won")
        break;
    } 
    else if(user < secret){
        console.log('                Enter a higher value');
    }
    else{
        console.log("                Enter a lower value");
        
    }

    score = 100 - attempt;
    


}
let rounds = 100 - score;
if(win == 1){
    console.log(`You guess ${secret} in ${rounds} rounds`);
    console.log(`Your total score is 
        ${score}`);
}
else{
    console.log("Game over ");
    console.log(`The secret number was ${secret}`);
    
    
}
