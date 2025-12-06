// We can make errors in the program and that error can ccrash and stop the rest of execution .
// But we can handle that errors and program will continue its execution 
//The methods are try and catch try tries the progrsm which can cause error ,if error catch will catch the error and we can print a message instead of throwing an error 
// But this works only in synchronous programming not asynchronous 
setTimeout(() => {
    console.log("Go out from home .You have only two secconds...")
}, 2000);

let person ="Shahzad Ahmad"; // without defining name error occur which is handled below
try {
     console.log(person + " is not a bad man");// Thsi is tried but name is not defined
} catch (error) {
    console.log("Soory we cant talk about this statement \n" + error); // error is catched and handled
}

setTimeout(() => {
    console.log("The police is coming.......")
}, 4000);

setTimeout(() => {
    console.log("Your data is hacked and you are wanted...");
    
}, 6000);

setTimeout(() => {
    console.log("Your time is finished..finally you got caught");
}, 10000);

// It will not handled asynch program .To handle we have to use it inside the async func
    setTimeout(() => {
        try{
            console.log(person2 + " is not a bad man");//Peron2 is not defined
        }catch(error){
            console.log("The timing is wrong !")
        }
    }, 3000);