// For-in loop print the keys of an object
// The for...in loop is used to loop through the keys (property names) of an object.
// It gives you each key one by one.

const obj = {
  "  shah": 45,
    "shAZD": 45,
    "gulkhaN": 45,
    "khan": 45,
}
for (i in obj) {
   
    console.log(`Marks are ${obj[i]}`);
}

// The for...of loop is used to loop through the values of an iterable — like an array, string, or Map.
// It gives you each value one by one.

for(j of "shahzad"){
    console.log(j);
}
