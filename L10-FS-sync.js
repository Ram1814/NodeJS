const { isUtf8 } = require('buffer');//When you don't mention the encoding(utf-8)
const {readFileSync , writeFileSync} = require('fs');

console.log('Start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first,second);

writeFileSync(
    './content/result.text', 
    `Here is the result : ${first}, ${second} `, //Every time it will overwrite the result file
    {flag: 'a'} // It will append the above statement everytime
)

console.log('This task is done');
console.log('Starting the the next one');