let p = fetch("https://official-joke-api.appspot.com/random_joke") // this will fetch an api from server 
p.then((value)=>{
    console.log(value.status)  // check the status and returns a code between 200 - 299 
    console.log(value.ok) // return true if the status is btwn 200-299 ,API fetched successfully
    console.log(value.headers) // return the meta data of the api
    
    // return value.text() // return the api as a string
    return value.json()// returns as a javascript object
}).then((value)=>{
    console.log(value) // consoles the object simply api
})