alert("Hello ")
let time = setTimeout(() => {
    document.body.innerHTML = "<h1>I am also a hello and i came after 4 seconds </h1>"
}, 4000);// settiemout delays a task for a specific time and the time is taken in miliseconds
console.log(time)
let ask = prompt("Are you want to clear the timeout?")
if(ask === "yes"){
    clearTimeout(time)// simply clear or remove the timeout function execution
}

// We can also pass arguments to settimeout
const product = (a,b)=>{
    alert("Yes i am working properly\n The product is " + (a*b));
}
setTimeout(product,7000,50,50);

// setinterval is same as settitmeout but it repeats the execution after a certain time
let stop = setInterval(() => {
    alert("I am back")
}, 4000);
const sum = (a,b) =>{
    alert("The sum is " + (a+b))
}
setInterval(sum,12000,50,50);
clearInterval(stop);