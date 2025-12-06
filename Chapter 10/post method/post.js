async function create_todo() {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: 'Shahzad',
            body: 'myTODO App',
            userId: 1,
        }),

    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}
const mainfunc = async() =>{
    let todo = await create_todo()
    console.log(todo)
}
mainfunc()