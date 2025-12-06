//1
let name = "string" 
let num =23
let add = name + num
console.log(add); //* This prints string23 beacause strings are added side by side and num is also stored as a string

//2
let type = typeof(name)
console.log(`The type of name variable is ${type}`);



//3
const marks = {
    "shahzad" : 90,
    "ali" : 69,
    "kalwom" : 50,
    "paria" : 70,
}
marks["khan"] = 56; //* YES WE CAN ADD NEW KEYS TO OBJECTS
// or
marks.paria = 56; //* yes we can also change vlaues


console.log(marks);



//4
const dict = {
    "noun":"name of place or thing",
    "language":"Combination of words which people unerstand",
    "laptop":"A machine which help us",
    "Pakistan":"A beautiful country",
    "English":"American language"
}
let meaning = dict["English"]
console.log(`The meaning of English is "${meaning}"`);
