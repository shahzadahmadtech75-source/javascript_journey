//* String is a sequence of characters enclosed in quotes 
// Using double quotes
let name = "shahzad";
console.log(name);

//using single quote
let othername = 'khanzada';
console.log(othername);
console.log(name.length);

//? String Indexing
console.log(name[0]); // Index starts from zero
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);

/*//* Template Literals
                  When we use backtiks(``) instead of quotes then it becomes template literal
//? in this we can use double as well as single quotes inside another string 
//? we can also use variable directly in bacckticks and this is called "string interpolation "
*/
let sentence = `This is a "string"`;
console.log(sentence); // quotes inside ``


let boy1 = "Shahzad";
let boy2 = "Gulkhan";
console.log(`${boy1} is a friend of ${boy2}`) // string interpolation

