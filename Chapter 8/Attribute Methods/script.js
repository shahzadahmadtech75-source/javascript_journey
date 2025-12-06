let first = document.getElementById('first');
first.hasAttribute("class");//  Checks the existance of the given attribute
first.getAttribute("class"); //return the name of the attribute
let second = document.getElementById("second");
second.setAttribute("class","nextclass secondclass")// add the attribute to the concerned element
second.removeAttribute("hidden");//removes the given attribute
first.attributes // shows all the attributes

//* making custom attributes :
//                      custom attributes can be made by using (data-attibute name ) and to get the custom attribute use elem.dataset.attribute name
