function loadscriptPromise(src){
    return new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.src = src;
 
        script.onload =()=>{
            console.log("Script loaded succesfully")
            resolve("Loaded !")
        }
        script.onerror = ()=>{
            console.log(new Error("Error Occured!"))
            reject("Something went wrong!")
        }
        document.body.appendChild(script);
 
    
    })
}
loadscriptPromise("https://cdn.jsdelivr.net/npm/es-module-shims/dist/es-module-shims.min.js")
.then((message)=>{
    alert(message)
})
.catch((err)=>{
    alert(err)
})