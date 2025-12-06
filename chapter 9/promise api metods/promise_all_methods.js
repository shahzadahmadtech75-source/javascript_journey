let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("the first promise is resolved");
        resolve(100);
    }, 1000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("the second promise is resolved");
         resolve(200);
    }, 2000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("the third promise is resolved");
        resolve(300);
    }, 3000);
})
let promise_all = Promise.all([p1,p2,p3]);
promise_all.then((value)=>{console.log(value)})