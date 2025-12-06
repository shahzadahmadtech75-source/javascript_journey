//* foreach function returns undefined

let names = ["shah", "khan", "gul", "tajudin"]
names.forEach(items => {
    console.log(items); //* forEach is used as a function the first  parameter is for printing the items one by one in array

})
//* Second parameter is used for indexing the items 
let students = ["Shahzad","Ahmad","Gulab","hasnian","Smarain"]
students.forEach((names,rollno)=> {
    console.log(rollno,names);
}
)

//* Third parameter is for using the whole array 
const fruit = ["apple","banana","chawal"]
fruit.forEach((i,p,arr)=>{
    console.log(`${i} is on index no: ${p} of ${arr.length} indexes`);
})

// [1,2,3].forEach(n => {
//   if (n === 2) break; //* break or early out from loop cant work the function will approach all the items
// });
