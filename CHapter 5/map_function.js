//* map is like for each ,it takes the elements one by one and perform operations with it but it return a new array ulike foreach and the original array reamains unchanged
//? 1
let num = [1,2,3,5,6,7]
const square = (value)=>{
    return value*2;
}
let a = num.map(square); //? The square function is applied on each element
console.log(a);
////////////////////////////////////////
//? Example 2
let names = ["This","is","a","string"]

const length = (l)=>{
    return l.length
}
console.log("The lengths are: ",names.map(length));
////////////////////////////////////////
//? Example 3
const upper = (a)=>{
    return a.toUpperCase()//* Converts all strings to uppercase
}

console.log(names.map(upper));
////////////////////////////////////////////////
//? example 4
//* Just like foreach it also contins three arguments 1: value 2: index 3: array
let b = num.map((value,index,array)=>{
    // return value,index,array //* Returning values by commas return only last one 
    return ({value,index,array})
})
console.log(b);
////////////////////////////////////////////////////
//? Example 5
let plus = [12,20,30,40,50,60,70]
const index = (a,b)=>{
    return a + b
}

// let nan = console.log(plus.map(index)) //* This didnt return array it stores undefined in nan
let nan = plus.map(index)
console.log(nan); //Output = [12,21,32,43,54,65,76] a is taken as value and b is taken as index and every index is added to its value
/////////////////////////////////////////////////////////
//? Example 6
let number = [1,2,3,4]
const id = (key)=>{
    key = key.toString()
    return `ID : ${key}`
}
let ids = number.map(id);
console.log(ids);
/////////////////////////////////////////////////////////////////
//? Example 7
const arr = (value,index)=>{
      return `Value : ${value}, Index : ${index}`
}
let array = number.map(arr)
console.log(array)
