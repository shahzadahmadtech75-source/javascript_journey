//* Imagine you have a basket of fruits and you want to get thee apples only
//* Same works filter function in javascript .it takes the whole array and return the elements passed true  through a test or condition .
//? filter = Keeps only the elements that passes the test 

// Example 1;

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const even = (a) => {
    if (a % 2 == 0) {
        {
            return a
        }
    }
}
let n = num.filter(even)
console.log("Even numbers are: ", n);

// Example 2:
let names = ["Shahzad", "KAlim", "khan", "Gulab gul"]
let d = names.filter(name => name.length > 5)
console.log(d);

//Example 3;
let people= [
    { name: "shahzad" , age: 20 },
    { name: "akram" , age: 10 },
    { name: "Gulkhan" , age: 25 },
    { name: "faraz" , age: 19},
    { name: "Dniel" , age: 17 }
]
const adults = (person)=>{
    return person.age>18
}
let a = people.filter(adults)
console.log(a);

//Example 4:
let prices = [50,67,89,124,146,876]
const lower = (rate)=>{
    return rate<100
}
let limited = prices.filter(lower)
console.log("The prices below Hundered are ",limited);//? if we use simple print type it prints an array 
// console.log(`The prices below Hundered are ${limited}`);
//? If we use bactickk then it prints the values normal not an array



// Example 5:
let strings = ["","ahsan","string"]
const remove = (a)=>{
    return a.length>0
}
let g = strings.filter(remove)
console.log(g);

// Example 6:
let arr = [1,2,3,4,5,6,7]
const li = (d)=>{
    return d>2
}
const lap = (f)=>{
    return f*2

}
let h = arr.filter(li)
let t = h.map(lap)
console.log(t);
















