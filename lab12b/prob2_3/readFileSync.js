const fs = require('fs');

let file = fs.readFileSync('./about.txt')
console.log(file.toString())
console.log("this is the end of the file");