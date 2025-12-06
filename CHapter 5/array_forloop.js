//* ARray from method 
let str = "12345"
let a = Array.from(str) //? Create an array from other object just like here from string
console.log(a);

//* FOR OF  is used for looping through iterable aray ,string,set etc
let letter = ["a", "b", "c", "d", "e"]
for (i of letter) {
    // if(i == "c"){
    //     break;
    // } //* We can break early unlike foreach and continue also.

    console.log(i); ///? Prints the values of array one by one 

}

//* for in prints the keys of an array simply index here and also used for object and array is also an object
for (j in letter) {
    console.log(j, letter[j]);

}

