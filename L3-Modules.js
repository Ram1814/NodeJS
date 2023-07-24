// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./L4-Names.js')
const sayHi = require('./L5-Utils.js')
const myName = require('./L6-AlternativeFlavour.js')
require('./L7-MindGrenade.js');//When you import a module, you actually invoke it.

console.log(myName);
console.log(names);

 sayHi('Siya');
 sayHi(names.ram);
 sayHi(names.rama);