console.log(" Write your request and Wait 3 seconds for answer...")
let timeleft = 3
let timer = setInterval(() => {
    console.log(`Time left : ${timeleft}`);
    timeleft--;
    if (timeleft < 1) {
        clearInterval(timer);
    }

}, 1000);
async function reject_promise(any) {
    try {
        console.log("Request : " + any)
        let mypromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Answer : I dont accept it! ")
                console.log("Sorry! Your request is rejected");
            }, 3000);

        })
        let wait = await mypromise
        console.log(wait);
    } catch (error) {
        console.log(error);

    }


}
reject_promise("Please accept my invitation...")