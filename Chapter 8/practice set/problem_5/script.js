let bulb = document.getElementsByClassName('box1')[0]
let button = document.getElementsByClassName('on')[0]
function glow(){
    bulb.classList.toggle('glow')
    
}
button.addEventListener('click',glow)