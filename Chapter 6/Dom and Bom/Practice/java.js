let ask = Number.parseInt(prompt("Enter your age: "))
if(isNaN(ask)){
    alert("Enter a valid age")
}
else if(ask<0){
    console.error("Age cant be negative")
    
}
else if(ask>0 && ask <= 18){
    alert("You are a child and cant drive")
}
else if(ask > 18 && ask < 100){
alert("You are eligible for driving")
}
else if(ask >= 100 ){
    alert("Go and sleep grandpa for good health")
}
else{
alert("Your age is not valid")
}
// confirm 
let choice = confirm("Are you want to enter again")
if(choice){
    ask = Number.parseInt(prompt("Enter your age: "))
    
    if(isNaN(ask)){
    alert("Enter a valid age")
}
else if(ask<0){
    console.error("Age cant be negative")
    
}
else if(ask <= 18){
    alert("You are a child and cant drive")
}
else if(ask > 18 && ask < 100){
alert("You are eligible for driving")
}
else if(ask >= 100 ){
    alert("Go and sleep grandpa for good health")
}
else{
alert("Your age is not valid")
}
}else{
    alert("Thanks")
}