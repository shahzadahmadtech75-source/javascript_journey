//* Now we will see how to access elements through their id and class etc
//?1:Changing the colour of the card title to red

let title = document.getElementsByClassName("card-title")[0]// we are getting the card title which is a heading through class name and 0 is the index means the first class of card
title.style.color = "red"// adding the styling

//* Accessing through id
let text = document.getElementById("card-text")
text.style.color = "blue"

//* Accessing all css selectors through query
let allclass = document.querySelectorAll(".card-title")
allclass[0].style.color = "red"
allclass[1].style.color = "blue"
allclass[2].style.color = "green"


console.log(allclass);

//* Accessing one seleector through query
document.querySelector(".this").style.color = "gold"
document.querySelector(".this").style.background = "black"

document.querySelector(".this1").style.color = "white"
document.querySelector(".this1").style.background = "purple"

document.querySelector(".this2").style.color = "white"
document.querySelector(".this2").style.background = "green"

//* Accessing through tagname
document.querySelector(".card").getElementsByTagName("a")

//* Accessing through input name
document.getElementsByName("search")
