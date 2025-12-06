// if one of the promise is rejected then promise.all will not run due to that one rejection 
// to avoid such problem there is another method which filters the promises and console the rejected as rejected as well as resolved values
let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("the first promise is resolved");
        resolve(100);
    }, 1000);
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
let promise_settle = Promise.allSettled([p1,p2,p3]);
promise_settle.then((value)=>{console.log(value)})