const fs = require('fs');

const readStream = fs.createReadStream('./novel.txt')

// fs.createReadStream in Node.js is 64KB
readStream.on('data', (chunk) => {
  console.log(chunk.toString());
})

