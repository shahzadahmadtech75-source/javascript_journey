// Arithematic operators
console.log('*********************Arithematic operators******************************');

let a = 12
let b = 10
console.log("a+b = ",a+b)
console.log("a-b = ",a-b)
console.log("a*b = ",a*b)
console.log("a/b = ",a/b)
console.log("a**b = ",a**b)
console.log("a%b = ",a%b)

console.log("++a = ",++a) //first add 1 then print output = 13
console.log("a++ = ",a++)  //first print then add 1 output = 13 but a is stored as 14

console.log("--a = ",--a)  //first minus 1 then print output 14-1 = 13
console.log("a-- = ",a--)   //first print then minus 1 output = 13 but stored as 12
console.log("a = ",a)    //now a is 12
console.log("a-- = ",a--)  //output = 12 but stored as 11

// Assignment Operators

console.log('***************************Assignment Operators**********************************');

let value = 10
value+=5 //same aas value = value +5
console.log(value)

value-=5 //same aas value = value - 5
console.log(value)

value*=5 //same aas value = value * 5
console.log(value)

value/=5 //same aas value = value /5
console.log(value)

value**=2 //same aas value = value ** 2
console.log(value)

value%=5 //same aas value = value % 5
console.log(value)

// Comparrison operaters    (==,===,!=,!==)

console.log('**************************Comparrison operaters****************************');
let n1 = 10
let n2 = "10"

console.log('n1 == n2 is:', n1 == n2) // converts dataytpe then compare so string is converted into integer or number

console.log('n1 != n2 is:', n1 != n2) //same as == ,so it return false 

console.log('n1 === n2 is:', n1 === n2) // It is strict and compares on the baasis of datatypes not conversion or anything else
console.log('n1 !== n2 is:', n1 !== n2) // same as ===

//Comparison operators ( >, <, >=, <=)
let num1 = 50
let num2 = 60

console.log('num1 > num2 is :', num1 > num2);
console.log('num1 < num2 is :', num1 < num2);
console.log('num1 >= num2 is :', num1 >= num2);
console.log('num1 <= num2 is :', num1 <=num2)


//Logical Operators (and{&&}, or{||}, not(!))
console.log('***********************Logical operators***********************');

let name = "shahzad"
let name1 = "shadman"
console.log(name == name1 && name != name1); //both should trur for true
console.log(name == name1 || name != name1); //one is enough for true
console.log(!(name == name1)); //it makes true false and false true

/*So these are all 
about operators that are the core
hearts of javaascript and 
i have also showed multiline here */ 