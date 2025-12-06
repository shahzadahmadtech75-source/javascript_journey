//* Promises in js are like real life promise, we make a promise and it becomes resolve(suuces)  or reject(fail)
let promise = new Promise(function(resolve,reject){
    console.log("Hello")
    resolve(10);
})
console.log(promise);