const fs = require('fs');

fs.readFile('./about.txt', "utf-8", (err, data) => {
  if (err)
    console.log('there is an error. can not read from file');
  else {
    console.log(data);
  }
});
console.log("this is the end of the file");


