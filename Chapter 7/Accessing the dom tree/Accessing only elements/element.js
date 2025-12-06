let doc = document.body
console.log('The first child node of body is  :',doc.firstChild);
console.log('The first element node of body is  :',doc.firstElementChild);

//* We can see on the console that first child returns nodes while elementchild returns only element and this is called element only navigation
const bgred = ()=>{
    document.body.firstElementChild.style.background  = "red"
  
}
bgred(document.body)// thats how we can navigate elements and style them iin js