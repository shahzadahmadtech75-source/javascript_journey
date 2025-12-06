//* session storage is similar to local storage but it clears the objects after closing the tab
//* on refreshing the tab it remains but on closing it dissappers the keys value pairs
// moreover the methods of sti=oring and getting values is same as localstorage

// Storage event: it is occured when a local or session key is changed in new tab not existing tab
localStorage.setItem("name","shahzad")
window.onstorage =(event)=>{
    alert("The name is changed")
    console.log(event);

}