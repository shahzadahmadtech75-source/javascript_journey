// let is also used to declare variables 
// let can be updated not redeclared
//Let can be declared and we can store value later
// it is blocked scope
// it is sensitive and affected by repeating 
let name="shahzad"
let marks;  //variable declared 
{
    let name="shahzad ahmad"
    console.log(name)
}
console.log(name) //So we can see that global is different from blocked as written

// let name="pakistan"  this line shows error which show that we cant use name repeatedly
let Name="gulkhan"
console.log(Name)  //this runs because of case sensitivity

name="magahz khan" //This is updated not repated .we cant write let to update a variable 
console.log(name)
marks=567   //store a value
console.log(marks)