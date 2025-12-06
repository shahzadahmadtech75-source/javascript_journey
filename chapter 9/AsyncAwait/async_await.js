// async is used with functions to tell js that this function will take sometime for execution and you have to do the other things as instructed .
//await is used inside a async function to wait for the function execution then do what is ordered
// async returns a promise
// Without await: async function runs through all code without pause; promises run in background resolving later.
// With await: async function pauses at that line until promise resolves, then continues with resolved value.

async function weather() {
    let peshawar_Weather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("28 degree")
        }, 2000);
    })
    let islamabad_Weather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("50 degree")
        }, 5000);
    })
    console.log("Fetching Peshawar Weather........")
    let pW = await peshawar_Weather;
    // peshawar_Weather.then((value)=>{
    //     console.log(value);
    // })
    console.log(pW);
    console.log("Peshawar Done!");
    console.log("Fetching Islamabad Weather........")
    let iW = await islamabad_Weather;
    //  islamabad_Weather.then((value)=>{
    //     console.log(value);
    // })
    console.log(iW);
    console.log("Islamabad Done!");

}
const  wait = async()=>{
    console.log("I waited for the senior function.I am a good arrow function.")
}

// weather();
async function letsee() {
    await weather();
    console.log("\n");
    await wait();
    console.log("\n");
    
}
letsee();
