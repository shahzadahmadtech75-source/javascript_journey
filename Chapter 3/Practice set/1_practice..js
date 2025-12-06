//  print the marks of students using object and for loop
const marks = {
    shazad: 98,
    ahmad: 65,
    janan: 56,
    gulkhan: 46
}
for(let i in  marks ){
    console.log(`Marks of ${i} are ${marks[i]}`);

}

//2
const prompt = require('prompt-sync')();
while (1) {
    console.log("Enter 20 to stop:");
    
    let user = Number.parseInt(prompt("Enter  "));
    if (user == 20){
        console.log("Program stopped");
        break;
        
    }
    console.log(user);
    
}
//3
const mean = (a,b,c,d,f)=>{
    return (a+b+c+d+f)/5
}
let average = mean(4,5,6,8,3)
console.log(average);
