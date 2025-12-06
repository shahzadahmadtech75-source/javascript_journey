// console.log shows the element as a document tree
//console.dir shows the element as a js object with all its properties
console.log(document.getElementsByTagName('h1')[0]);
console.dir(document.getElementsByTagName('h1')[0]);

// tagname is the name of the element while nodename is the nme of any type of node i-e text,comment etc
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

// Innerhtml shows the inside content of the given id or element etc
// can be changed the content temperory in the browser not in the hard coded html
// check in browser
// innerhtml func is valid ony for elements not text comments etc

//* outerHTML shows the whole element along with the inner 
// to access the text or comment nodes we have to use .data or .nodevalue

//* textContent return the html as text

//? hidden attribute hide the refered element content and can be seen as
console.log(document.getElementById('heading').hidden = false);
console.log(document.getElementById('spaned').hidden = true);
