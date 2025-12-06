console.log(document.getElementById("id1").matches(".div1")) // match by class 
console.log(document.getElementById("id2").matches(".div2"));
//*Here we used matches functions which match the given id with the given css selector i-e .class ,tagname etc and returns true or false

console.log(document.getElementById("id1").matches("div")) // match by tagname
console.log(document.getElementById("heading").matches("h1")) // match by tagname

console.log(document.getElementsByTagName("h1")[0].matches("#heading"))


//* Closest function checks the given class in its nearest ancestor(parent=> grandparents) and return that ancestor
//* first it checcks itself then climb up further
//* if not find the given class in the html document upper than it it returns null
console.log(document.getElementById("sp").closest(".box1"));

//* matches() only returns true or false (it never returns an element).
//* closest() returns the closest matching element, or null if none found.


//? contains function checks whether the given id or class is present in the its parent or not and returns true or false
let container = document.getElementsByTagName("span")[1]
console.log(document.getElementById("container").contains(container));

