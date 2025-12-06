// Localstorage is browser storage given to particular wenbsite which remain the files even after closing website ,pc or reloadin getc
// the files are stored in key value pairs
// key value pairs must be strings
// let key = prompt("Enter your key : ")
// let value = prompt("Enter your value : ")
// localStorage.setItem(key,value);
let color = localStorage.getItem("favColor");

// create button
let btn = document.createElement('button');
btn.innerText = "Click me";
btn.style.color = "white";
btn.style.background = "green";
btn.style.border = "2px solid red";
btn.style.borderRadius = "10px";
btn.style.padding = "10px";

// center the page content
document.body.style.textAlign = "center";

// container for heading
let heading = document.createElement('h1');
document.body.appendChild(heading);
document.body.appendChild(btn);

let user;

if (!color) {
    // no color yet → ask
    user = prompt("Enter your favourite colour:");
    localStorage.setItem("favColor", user);
} else {
    // color exists → ask if want to change
    user = prompt(`Your current color is ${color}. Enter another favourite colour:`);
    localStorage.setItem("favColor", user);
}

// set background color
document.body.style.background = user;

// update heading
heading.innerText = `Your current color is ${user}`;

// button click changes text color based on background
btn.addEventListener('click', () => {
    if (user == "blue" || user == "red" || user == "black" || user == "green") {
        document.body.style.color = "white";
    } else {
        document.body.style.color = "black";
    }
});
