const prompt = require('prompt-sync')();



let age = prompt("Hey man! Enter your age here: "); //Takes user input and check in browser console how it really works
age = parseInt(age) //convert age in string into integr without decimals if user = 89.4 it return 89
if (age < 18) {
    // alert("Your age is very nice age ")   this works only in browser console

    console.log("You are not eligible for driving ");

}
else if (age === 18) {
    console.log("You are eligible for driving ");

}
else if (age > 18) {
    console.log("You havent learnt driving yet ");

}
else {
    console.log("Enter a valid age");
}
