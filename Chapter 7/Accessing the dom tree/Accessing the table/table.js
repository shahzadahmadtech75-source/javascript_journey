let a = document.body.firstElementChild
console.log(a)//* Accessing table
console.log(a.rows)//* Accessing the rows 
console.log(a.tHead)//* Accessing the thead
console.log(a.tHead.firstElementChild)//* Accessing tr
console.log(a.tHead.firstElementChild.firstElementChild)//* Accessing th

console.log(a.caption)//Thats how we can navigate tables its rows and captions etc