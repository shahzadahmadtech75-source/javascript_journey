let change = document.getElementsByTagName('button')[0]
change.onclick = ()=>{
    change.innerHTML = "<h1> This is a heading showed on clicking the button</h1>"
}
document.body.onmouseenter = ()=>{
    document.body.style.background = "blue"
    change.style.background = "yellow"
    change.style.color = "green"
    change.style.border = "2px solid white"
}