//* Dom Tree : The html document is like a document tree .
//? Html is its root
//? The head and body are its branches 
//? The title tag is a leaf of dom tree
//* And the rest all the elements and tags are also its leaf.nodes 

// Walking the Dom
//* We can access the dom tree( HTMl Document) through console in browser using

// document.head
// document.body
// document.title //* Returned as a string type 
// document.documentElement //* Access the root ( html element)
// * Rest of the title all the others are returned as object

// Check in browser....

//"html
// ├── head  ...( branches)
// │   └── title  ("Page Title" - text node)
// └── body
//     ├── h1     ("Hello" - text node)
//     └── p      ("Paragraph text." - text node)"
// )