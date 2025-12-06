// let message = alert("Enter a number")
// let a = prompt("ENter here")
// let write = confirm("are you sure")
// if (write){
//     document.write(a)
// }
// alert("Thanks buddy")
alert("Guess a number");
let secret = 78;
let win = 0;
let play = confirm("Do you want to play?");
if (play) {
    while (true) {
        let user = Number.parseInt(prompt("Enter your guess:"));
        
        if (isNaN(user)) {
            alert("Please enter a valid number");
            continue;
        }

        if (user === secret) {
            win = 1;
            break;
        } else {
            alert("Wrong guess, try again!");
        }
    }
}
if (win === 1) {
    alert("Congratulations! You guessed the number!");
}
