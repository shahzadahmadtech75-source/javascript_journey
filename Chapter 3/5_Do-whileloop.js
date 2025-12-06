//* A do...while loop is a type of loop that always runs the code inside it at least once, before checking the condition.

//? Basic idea:

//* “Do something first, then check if we should do it again.

/**
 * *🧠 How it works

*?The code inside the do block executes once, no matter what.

*?Then the condition is checked (the while part).

*?If the condition is true, the loop runs again.

*?If the condition is false, the loop stops.
 */
//* Syntax: do {
//?           things to repeat .All loop material is written here.
//*            } while (condition_to_continue); ,extra brackets are not used here"{}"

const prompt = require('prompt-sync')();
let user;
do {
    user = Number.parseInt(prompt("Enter your age between 20 and 100:"));
    console.log("Your age is ", user);

} while (user <20 || user > 100)
console.log("Your age ", +user + " is Optimum.You are eligible.");
