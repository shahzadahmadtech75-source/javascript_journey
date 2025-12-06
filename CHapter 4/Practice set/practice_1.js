console.log("shah\"".length); //? output = 5
//2
let myname = "Shahzad Ahmad"
console.log(myname.startsWith("shah")); //case sensitive
console.log(myname.endsWith("ahmad"));
console.log(myname.includes("zad"));

//3
console.log(myname.toLowerCase());

//4
let amount = "Please give me 1000";
let a = amount.slice(15);
a = Number.parseInt(a);
console.log(a);


//5
myname[4] = "g" //* cant change the original string
console.log(myname);