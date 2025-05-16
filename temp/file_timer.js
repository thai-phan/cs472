const fs = require('fs');

// setTimeout(() => console.log('Timer callback'), 0);

// fs.readFile("input.txt", (err, data) => {
//   console.log('File read callback', data.toString())
// });

// setTimeout(() => console.log("this is setTimeout 0"), 0);

fs.readFile('input.txt', (error, data) => {
  if (error) console.log(error);
  else console.log("File data:", data.toString())
});

setImmediate(() => console.log('Immediate callback'));
