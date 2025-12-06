//* the "finally clause" of a try-catch-finally statement is used to execute code after try and catch, regardless of the outcome.whatever happens in the try or catch blocks, the code in the finally block will always run.
const prompt = require('prompt-sync')();
try {
    let p_number = prompt("Enter your phone number should be Pakistani number :  ").trim();
    // p_number = Number.parseInt(p_number);
    if (isNaN(p_number)){
        let alpha_error = new Error("Invalid number !");
        alpha_error.name = "NumError"
        throw alpha_error;
    }
    else if(p_number.length !== 11 || !p_number.startsWith("0")){
         let num_error = new Error("This is not a Pakistani Number !");
        num_error.name = "SimCard-Error";
        throw num_error;
    }
    else{
        console.log("Your number " + p_number + " is correct.");
    }
    
} catch (error) {
    console.log("Wait... an error was found in your number !");
    console.log(error.name + ": " + error.message);
}finally{
    console.log("Pakistani number is useful to work with.");
    
}


