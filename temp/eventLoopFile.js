const fs = require('fs');

const rd = fs.createReadStream("input.txt");
rd.close();
rd.on("close", () => console.log('readable Stream close event2222'))
fs.readFile('input.txt', "utf-8", (error, data) => {
  if (error) console.log(error);
  else console.log("file data:", data)
});

// Timers
setTimeout(() => console.log("this is setTimeout 5000"), 5000);
// Timers
setTimeout(() => console.log("this is setTimeout 0"), 0);
// Check phase
setImmediate(() => console.log("this is setImmediate 1"));
// Check phase
setImmediate(() => {
  console.log("this is setImmediate 2")
  // mirco task
  Promise.resolve().then(() => console.log('Promise.resolve inside setImmediate'));
});
// micro task
Promise.resolve().then(() => console.log('Promise.resolve 1'));
// micro task
Promise.resolve().then(() => {
  console.log('Promise.resolve 2')
  process.nextTick(() => console.log('nextTick inside Promise'));
});
// before micro task
process.nextTick(() => console.log('nextTick 1'));