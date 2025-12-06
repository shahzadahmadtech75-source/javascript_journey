let btn1 = document.getElementsByClassName('btn1')[0]
let btn2 = document.getElementsByClassName('btn2')[0]
let btn3 = document.getElementsByClassName('btn3')[0]
function google(){
    window.location.href = "https://google.com"
}
function youtube(){
    window.location.href = "https://youtube.com"
}
function facebook(){
    window.location.href = "https://facebook.com"
}
btn1.addEventListener('click',google)
btn2.addEventListener('click',youtube)
btn3.addEventListener('click',facebook)