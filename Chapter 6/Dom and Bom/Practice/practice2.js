let user = (prompt("What you want to open\n Google\nyoutube\nfacebook"))
console.log(window)
if(user == "google"){
    window.location.href = "https://google.com"
}
else if(user == "youtube"){
    window.location.href = "https://youtube.com"
}

else if(user == "facebook"){
    window.location.href = "https://facebook.com"
}

else{
    alert("You missed the chance to visit Social Media")
}