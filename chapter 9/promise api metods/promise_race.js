// another method which consoles the value of the promise which is fullfilled first among the others 
// if a rejected promise came first it will print the error ,the method is .race
let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("the first promise is resolved");
        resolve(100);
    }, 5000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("the second promise is resolved");
         reject(new Error("Error Occurred!"));
    }, 2000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("the third promise is resolved");
        resolve(300);
    }, 3000);
})
// let promise_race = Promise.race([p1,p2,p3]);
// promise_race.then((value)=>{console.log(value)})

// to print the value of only quickled resolved promised we willl use .any method which does not look at rejected promises
let p4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("the first promise is resolved");
        resolve(100);
    }, 8000);
})
let p5 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("the second promise is resolved");
         reject(new Error("Error Occurred!"));
    }, 1000);
})
let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("the third promise is resolved");
        resolve(300);
    }, 5000);
})
let promise_any = Promise.any([p4,p5,p6]);// dont be confuse by the messages because we are dealing with values not the manual mesages
promise_any.then((value)=>{console.log(value)})