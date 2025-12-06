//"https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
function loadscript(scr){
    return new Promise((resolve,reject)=>{
        var script = document.createElement('script');
        script.src = scr;

        script.onload = () =>{
            console.log("Script loaded successfully!");
            resolve("Script loaded with "+ scr);
        }
        script.onerror = ()=>{
            console.log("Error found While loading the script!")
            reject("Error with " + scr);
        }
        document.body.appendChild(script);
    })
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
.then((message)=>{
    alert(message);
})
.catch((error)=>{
    alert(error);
})