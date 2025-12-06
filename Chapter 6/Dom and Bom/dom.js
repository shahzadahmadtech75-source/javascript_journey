console.log(window);//* It is the big house where our whole websites live ,everything jascript function variable and all other as well as browser interaction 
// console.log(document) // * Dom is the webpage itself .It can access all the html elements like headings,paragraphs ,buttons etc and can be manipulated through javascript
const heading = document.getElementsByTagName("h1")[0];
heading.style.background = "red"// single property
heading.style.color = "gold";
heading.style.height = "43px";
heading.style.width = "504px";
heading.style.textAlign = "center";



// //* BOM contains the tools to control the browser interactivity through javascript like history ,redirecting to other websites etc
function newlink(){
    window.location.href = "https://google.com"
}
function newlink1(){
    window.location.href = "https://youtube.com"
}
function newlink2(){
    window.location.href = "https://facebook.com"
}
// //button
  const btn = document.getElementById("button1");
        btn.style.background = "purple";
        btn.style.color = "white";
        btn.style.fontSize = "15px";
        btn.style.height = "33px"
        btn.style.fontWeight = "bold";
        btn.style.border = "none";
        btn.style.borderRadius = "12px"
        
        const btn1 = document.getElementById("button2");
        btn1.style.background = "red";
        btn1.style.color = "white";
        btn1.style.height = "33px"
        btn1.style.fontSize = "15px";
        btn1.style.fontWeight = "bold";
         btn1.style.border = "none";
        btn1.style.borderRadius = "12px"
        
        const btn2 = document.getElementById("button3");
        btn2.style.background = "blue";
        btn2.style.color = "white";
        btn2.style.height = "33px"
        btn2.style.fontSize = "15px";
        btn2.style.fontWeight = "bold";
         btn2.style.border = "none";
        btn2.style.borderRadius = "12px"