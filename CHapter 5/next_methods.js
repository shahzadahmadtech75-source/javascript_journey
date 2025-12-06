// Revrese
let num = [1,2,3,4,5,6];
console.log(num.reverse()); //* Simpply Reverse the array and also modifies the original array

console.log(num);

// Splice
let num1 = [10,19,81,17,12,50];
console.log(num1);
//* Splice takes 3 arguments(1:position or index from where we want to remove items ,2: how many items to be removed, 3: the items we want to add as much we want )

let split = num1.splice(1,4,10,20,30,40)
console.log(split); //? return the deleted items
console.log(num1);//? Modifies the original array

//Slice
let arr = ["shah","khan","gulkhan","taj","shahid"];

//? oroginal array doent modified

let sl = arr.slice(1) //* give a slice of the array from index 1 to last 
console.log(sl);

let sli = arr.slice(1,4);// The second argument is the last index which is not included
console.log(sli);

console.log(arr); //? not modified





