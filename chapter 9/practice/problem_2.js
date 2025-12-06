console.log("Scipt loading started.....wait for 5 seconds..")
let timeLeft = 5;

let timer = setInterval(() => {
    console.log(`Loading in ${timeLeft} seconds...`);
    timeLeft--;

    if (timeLeft < 1) {
        clearInterval(timer);
    }
}, 1000);
async function loadscript(scr) {
    try {
        let load = new Promise((resolve, reject) => {
            setTimeout(() => {
                var script = document.createElement('script')
                script.src = scr

                script.onload = () => {
                    resolve("script loaded successfully")
                }
                script.onerror = () => {

                    reject("Sorry script loading failed")
                }
                document.body.appendChild(script)
            }, 5000);
          
        })
        let witload = await load
        console.log(witload)
    } catch (error) {
        console.log(error);

    }

}

loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")