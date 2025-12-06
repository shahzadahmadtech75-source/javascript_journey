// hhow to create and insert elements in html using js 
let heading = document.createElement('h3')// create a heading
heading.className = "newheading"// giving a class name
heading.innerHTML = "HEy i am inserted"// inserting content to the element

// document.getElementById('section').append(heading)//*append adds the created element in last of  the selected element 

// document.getElementById('section').prepend(heading)//* adds the element at first of the selected element
// document.getElementById('section').before(heading)//* adds the element before the selected element (out oif the element)

// document.getElementById('section').after(heading)//* adds the element after the selected element (out oif the element)

let highlight = document.createElement('mark')
highlight.innerHTML = "i am highlighted"
document.getElementsByTagName('h3')[0].append(highlight)

let del = document.createElement('del')
del.innerHTML = "</br>Hey i am deleted "
document.body.append(del)