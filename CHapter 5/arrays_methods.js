//* Important array methods
let names = ["Shahzad","kamran","Gulbadin","Sohail"];
let l = names.length;
console.log('The length of array is ',l);

// COnvrerion of array to a string
let str = names.toString();
console.log(`Type of new array is ${typeof str} now`);
console.log('\n');
//Join
let j = names.join(" and ");
console.log(`${j} are good people`); //? joins the elements of array by a given separator
console.log('\n');
//pop
let p = names.pop(); // Remove the last eleement
console.log(names,p + " i am romoved");
console.log('\n');
//push
let push = names.push("jaanisaar");
console.log(push) // return new array length
console.log(names); // Adds new element in the last
console.log('\n');
//shift
let s = names.shift();
console.log(names); // REMOVES FRIST ELEMENT
console.log(s); // return the removed element
console.log('\n');

// Unshift
let u = names.unshift("Khanzada");
console.log(names); // Adds new element to the beginning
console.log(u); // returns the length
console.log('\n');

console.table(names);


