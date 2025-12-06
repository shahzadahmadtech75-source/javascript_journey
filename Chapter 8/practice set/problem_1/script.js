let btn1 = document.getElementsByClassName('btn1')[0]
let btn2 = document.getElementsByClassName('btn2')[0]
let btn3 = document.getElementsByClassName('btn3')[0]
function show_red(){
    alert("You clicked the red button")
    document.body.style.background = "red"
}
function show_green(){
    alert("You clicked the green button")
    document.body.style.background = "green"
}
function show_blue(){
    alert("You clicked the blue button")
    document.body.style.background = "blue"
}
btn1.addEventListener('click',show_red)
btn2.addEventListener('click',show_green)
btn3.addEventListener('click',show_blue)
