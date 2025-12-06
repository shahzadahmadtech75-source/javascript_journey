try{
    console.log(mine);
} catch(error){
    console.log(error.name); // print the name of the error type
    console.log(error.message);// prints the message sent with the error
    console.log(error.stack);// prints full error name + message
}
const prompt = require('prompt-sync')();
let age = prompt("Enter your real Age.Your age should be between ( 18 - 150 ): ");
age = Number.parseInt(age)
try {
    if (age>150 || age<18){
        throw new RangeError("Your age is out of range!");

    }else{
        console.log("This is real age");
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

// Giving a custom name to the error
let user = prompt("Enter a name starts with 'S': ")
try{
    if(!user.toLowerCase().startsWith("s")){
    let myError = new Error("This name is not starting from 'S");
    myError.name = "NameError";
    throw myError;

}else{
    console.log("You entered the correct name : " + user);
}
}catch(error){
    console.log("You got a ",error.name);
    console.log(error.message);
    // console.log(error.name);
}