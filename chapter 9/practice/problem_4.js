console.log("wait for satisfaction-------");
let timeleft = 8
let timer = setInterval(() => {
    console.log(`Time left : ${timeleft}`);
    timeleft--;
    if (timeleft < 1) {
        clearInterval(timer);
    }

}, 1000);
async function check() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p1 am satisfied ")
        }, 2000);
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p2 am satisfied ")
        }, 4000);
    })
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p3 am satisfied ")
        }, 8000);
    })
    let w1 = await p1
    console.log(w1);
    let w2 = await p2
    console.log(w2);
    let w3 = await p3
    console.log(w3);
    // let resolvee_all = Promise.all([p1, p2, p3])
    // let all = await resolvee_all
    // console.log(all);
}
check()