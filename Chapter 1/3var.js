// Var is an old type of variable declaration .
// It is not blocked scope means if we change the value in the block it will also change in global variabel
var name="shahzad"   //Global; scope variable

{  //bllocked scope variable
    var name="shahzad ahmad"
    console.log(name)
}
console.log(name)  //here we can see that it hsa also changed the global variable value

// Moreover if i make another variable with the same name it doesnt affected
 var name="gulkhan"
 console.log(name)  //these are the limitaions and can produce bugs which is unsecure