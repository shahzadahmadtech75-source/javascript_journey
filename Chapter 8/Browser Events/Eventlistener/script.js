let element = document.getElementsByClassName('container')[0]
function write(){
 element.innerHTML = "<h1> This is a heading which is hidden </h1>"
 element.style.background = "yellow"
 element.style.color = "black"
}
function change_body(){
    element.innerHTML = "<p>Wow its a magic</p>"
    element.style.color = "black"
    element.style.textAlign = "center"
    element.style.fontSize = "larger"
    element.removeEventListener('click',write)
}
element.addEventListener('click',write)
element.addEventListener('dblclick',change_body)


