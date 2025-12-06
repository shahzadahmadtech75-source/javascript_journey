function loadscript(scr,callback){
    var script = document.createElement("script");
    script.src  = scr;
    script.onload = function(){
        console.log("script loaded with SRC = " + scr)
        callback(null,scr);
    }
    script.onerror = function(){
        alert("Error loading script with SRC: " + scr);
        callback(new Error("Src got some error"),scr)
    }
    document.body.appendChild((script));
}
function loaded(error, x){
    if(error){
        alert("Error happened: " + error);
    } else {
        alert("Script loaded successfully: " + x);
    }
}

loadscript("https://cdn.jsfdelivr.net/npm/es-module-shims/dist/es-module-shims.min.js",loaded);
