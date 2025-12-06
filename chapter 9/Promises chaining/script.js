function loadscript(link){
    return new Promise((resolve,reject)=>{
        var script = document.createElement('script')
        script.src = link
        document.body.appendChild(script);
        script.onload = () =>{
            console.log("script loaded with " + link)
            resolve("I am loaded")
        }
        script.onerror = () =>{
            console.log(new Error("Error with " + link))
            reject("Something went wrong!")
        }
    })
}
loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
.then((message)=>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        var script = document.createElement('script')
        script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js"
        document.body.appendChild(script);
        script.onload = ()=>{
            resolve("The next script is also ready")
        }
    })
}).then((message)=>{
    console.log(message)
})

.catch((error)=>{
    console.log(error)
})