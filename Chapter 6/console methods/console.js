//* When you debug code, you sometimes assume things are working right. Using console.assert() helps you check if your guess was correct.
//?If the condition is true: No output (silence means everything is OK!).
/*
If the condition is false: Console shows your error or warning.

This is helpful because you only get notified when something is wrong, not when things are working as expected.*/

let age = 12;
console.assert(age > 18, "User is not an adult!");

//* Error method
//Showing something went very wrong (code, server, etc.
console.error("Danger! App crashed!");

//* Warn method
// Something isn’t broken, but might go wrong.
//just like we say keep away from short circuits while workingg in electrical instruments
console.warn("Be careful! Your password is too short");

//* Table method 
// Viewing arrays and objects as neat tables.
let table = [{
    "shahzad": 34,
    "ahmad": 76,
    "jordan": 54,
    "killtener": 78,
    "shalley": 93
}]
console.table(table)
//* group and GroupEnd method
//Keeping related messages together in the console.
console.log('My life-style');
//Group 1
console.group("Morning");
console.log('Wake up early');
console.log('Take breakfast');
console.log('GO to university');
console.groupEnd();
//Group 2
console.group("Afternoon");
console.log('Came to home');
console.log('Eat the launch');
console.log('Walk a while');
console.groupEnd();
// group 3
console.group("Evening");
console.log('Play Cricket for 2 hours');
console.log('Spent time with family');
console.log('Eat the dinner');
console.log('Go to Sleep');
console.groupEnd();
console.log("\n");

//* time and timeend method
//* Measuring how fast parts of your code run
let i = 0;
console.log('         Your time is started now');
console.time("mytimer");
while (i<=50){
    console.log('this is ',i);
    i++;
}
console.log("Your loop takes ")
console.timeEnd("mytimer");// without inner label it write default with calculated time

//* clear method 
// Erase all the above consoles and return a fresh console
// console.clear()