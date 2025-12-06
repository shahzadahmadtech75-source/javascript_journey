// ---------------------------------------------------
// CREATE ELEMENTS
// ---------------------------------------------------
let container = document.createElement("div"); // Card wrapper
let par1 = document.createElement('p');
let par2 = document.createElement('p');
let btn = document.createElement('button');
let loader = document.createElement("div"); // Loading spinner

par1.id = "setup";
par2.id = "punchline";

// ---------------------------------------------------
// Add Button Text
// ---------------------------------------------------
btn.innerText = "Get a Joke!";

// ---------------------------------------------------
// Append Everything
// ---------------------------------------------------
document.body.appendChild(container);
container.appendChild(par1);
container.appendChild(par2);
container.appendChild(btn);
container.appendChild(loader);

// ---------------------------------------------------
// Body Styling (center everything)
// ---------------------------------------------------
let body = document.body;
body.style.background = "linear-gradient(135deg, #5a1ca3, #240046)";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.fontFamily = "Arial";
body.style.margin = "0";

// ---------------------------------------------------
// CARD CONTAINER STYLING
// ---------------------------------------------------
container.style.padding = "30px"; 
container.style.borderRadius = "20px";
container.style.background = "rgba(255,255,255,0.15)";
container.style.backdropFilter = "blur(10px)";
container.style.boxShadow = "0px 0px 40px rgba(0,0,0,0.5)";
container.style.width = "80%";
container.style.maxWidth = "500px";
container.style.textAlign = "center";
container.style.transition = "0.3s";
container.style.transform = "scale(1)";

// hover animation
container.addEventListener("mouseover", () => {
  container.style.transform = "scale(1.03)";
});
container.addEventListener("mouseout", () => {
  container.style.transform = "scale(1)";
});

// ---------------------------------------------------
// LOADING SPINNER STYLE
// ---------------------------------------------------
loader.style.width = "40px";
loader.style.height = "40px";
loader.style.border = "5px solid white";
loader.style.borderTop = "5px solid gold";
loader.style.borderRadius = "50%";
loader.style.margin = "20px auto";
loader.style.display = "none"; // hidden by default
loader.style.animation = "spin 1s linear infinite";

// Add keyframes via JS
let styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleSheet);

// ---------------------------------------------------
// BUTTON STYLING
// ---------------------------------------------------
btn.style.background = "black";
btn.style.color = "gold";
btn.style.padding = "12px 25px";
btn.style.borderRadius = "10px";
btn.style.border = "2px solid yellow";
btn.style.boxShadow = "0px 0px 18px green";
btn.style.fontWeight = "bold";
btn.style.cursor = "pointer";
btn.style.marginTop = "20px";
btn.style.transition = "0.3s";

// hover
btn.addEventListener('mouseover', () => {
  btn.style.background = "yellow";
  btn.style.color = "black";
  btn.style.border = "2px solid cyan";
  btn.style.boxShadow = "0px 0px 18px cyan";
});
btn.addEventListener('mouseout', () => {
  btn.style.background = "black";
  btn.style.color = "gold";
  btn.style.border = "2px solid yellow";
  btn.style.boxShadow = "0px 0px 18px green";
});

// ---------------------------------------------------
// PARAGRAPH STYLE (setup & punchline)
// ---------------------------------------------------
function stylePar(par) {
  par.style.padding = "15px";
  par.style.borderRadius = "10px";
  par.style.margin = "10px 0";
  par.style.fontWeight = "bold";
  par.style.opacity = "0";
  par.style.transition = "opacity 0.6s";
  par.style.minHeight = "50px";
  par.style.whiteSpace = "normal"; // 🔥 FIX SPACING BETWEEN WORDS
  par.style.wordSpacing = "3px";

}

stylePar(par1);
stylePar(par2);

// unique colors
par1.style.background = "#0077ff";
par1.style.color = "white";

par2.style.background = "white";
par2.style.color = "red";

// ---------------------------------------------------
// Typing Animation Function
// ---------------------------------------------------
function typeEffect(element, text, speed = 40) {
  element.textContent = "";   // ← use textContent
  let i = 0;

  return new Promise(resolve => {
    let interval = setInterval(() => {
      element.textContent += text[i];   // ← use textContent (keeps spaces correctly)
      i++;

      if (i === text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}


// ---------------------------------------------------
// Fetch Joke With Effects
// ---------------------------------------------------
async function getJoke() {

  // show loader
  loader.style.display = "block";
  // hide text while loading
  par1.style.opacity = "0";
  par2.style.opacity = "0";

  let response = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await response.json();

  // hide loader
  loader.style.display = "none";

  // typing animation
  await typeEffect(par1, data.setup);
  par1.style.opacity = "1";

  await typeEffect(par2, data.punchline);
  par2.style.opacity = "1";
}

// ---------------------------------------------------
// Button Click Event
// ---------------------------------------------------
btn.addEventListener('click', () => {
  getJoke();
});
