let p = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    alert("I came after 5 seconds")
    resolve(10)// resolve fullfill the promise ,without it the promise is in pending state
  },5000)
    
})
p.then((vaku)=>{    // this will work after resolving
   console.log(vaku);  
})

let c = new Promise((resolve,reject)=>{
    setTimeout(() => {
        alert("I came but i cause an error .Check the console!")
        reject(new Error("Error occured!.Try next time."));
    }, 10000);
})
c.catch((err)=>{ // this will work after rejection
    console.log("Some error ocurred")
})
// console.log(p) // this also shows the state of the promise
console.log(c)