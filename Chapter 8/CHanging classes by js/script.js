// So by using class methods we can manipulate classes in html using js
let heading = document.getElementById('first')
heading.className = "red black font"//this method changes the original classes in the html doc with these classes to the selected elem
heading.classList//returns or shows class list in the given element
heading.classList.add('blue')//add blue class to list
heading.classList.remove('red')//removes the selected class
heading.classList.toggle('red')//add the class if not present and remove if present
heading.classList.contains('font')//checks the calss and returns true or false