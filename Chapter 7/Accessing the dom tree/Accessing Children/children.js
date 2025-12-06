//* HTML is the grandfather
// Head and Body are its children also known as siblings
// Head is the parent of title and meta tags which are its chidren
//* Body is the parent of p and h3 tag
//? Accessing...............
console.log(document.body.firstChild); // shows as a heading node in console
console.log(document.body.lastChild); // shows as a script node in console
console.log(document.body.childNodes[2]); // shows as a paragraph node in console

//?* text nodes == newline ,intdents,whitespaces
//* element nodes == p,h1..,etc
//* Script nodes == script.js etc
