// dlete method 
let num = [1,2,3,4,5,6,7,8];
let length = num.length;
console.log('The  length of array is ',length); //? Length = 8

delete num[2]; //* Element on index 2 which is 3 is deleted but length remains the same
console.log(num);
console.log('The  length of array is ',num.length); //? length = 8



// concat
let num1 = [11,22,33,44,55,66];
let c = num.concat(num1); //? Returns new array combined of num and num1 but didnt change the original ones

console.log(c);

//* we can concat more than two arrays
let num3 = [12,13,14,15]
let d = num.concat(num1,num3)
console.log(d);

//Sort
let sort = [12,54,323,423556,3543,1344,454,656];
let s = sort.sort() //? Sort the array alpahabetically not by number values mean that numbers start from 1 will come first even 1 or 10000000000 then numbers from 2 then from 3 and so on 
console.log(s); 
console.log(sort);//* Modifies the original array

//? to sort the array ascending or descending we have to make a compare function and use as argument in sort
let compare = (a,b)=>{
    return a - b;
}
let ss = sort.sort(compare);
console.log(ss);
// Similarly if we want to amke descing just change the functon


