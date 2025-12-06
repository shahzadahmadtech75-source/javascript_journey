//* insertAdjacentHTMl is another method of inserting html elements through js
let first = document.getElementById('first')
first.insertAdjacentHTML('beforebegin','<p> Hey sir ! are you learning javascript iam alsoo learning so how your journey is going.Mine is the best</p>') // this adds the element before the selected element

first.insertAdjacentHTML('afterbegin','<p> Sorry sir i come in afterbegin</p>') // this adds the element at first inside  the selected element

first.insertAdjacentHTML('beforeend','<p> Sorry Sir i am coming before end</p>') // this adds the element just before the end of  the selected element

first.insertAdjacentHTML('afterend','<p>Thanks Sir i am going out of the room</p>') // this adds the element after the selected element

// We have a remove function which remove the whole element
first.remove()//* so it removes the whole div