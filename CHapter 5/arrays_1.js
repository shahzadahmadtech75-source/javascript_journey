//* Arrays are variables that can hold multiples values .Simply a list of items
//? Arrays can hold all datatypes  
//? Arrays are mutable ,values can be added as well changes.

let list = ["shahzad","ahmad","gulkhan",76,185,43.5,false]
console.log(list);
console.log(list.length);

//? arrays indexing
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);
console.log(list[4]);
console.log(list[5]);
console.log(list[6]);

//* Adding a value
list[7] = "i am new ";
console.log(list);
console.log(list[7]);

//* Changing value 
list[0] = "Shahzad gul";
console.log(list);
console.log(list[0]);

// Array type
console.log(`The type of array is ${typeof list }`); //? Object

//* To check the array is really an array or not
console.log(`This is a ${Array.isArray(list)} array`);


// for(let i = 0;i<list.length;i++){
//     console.log(list[i]);
    
// }
for (let i of list){
    console.log(i);
    
}