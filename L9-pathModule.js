const path = require('path');

console.log(path.sep); //Platform specific sperator which in our case is '\'

// const seperator = path.sep; 
// console.log(seperator);
// // Propert not a function thats why no ()

const filePath = path.join('\content', 'subContent', 'file.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, '\content', 'subContent', 'file.txt')
console.log(absolute);
