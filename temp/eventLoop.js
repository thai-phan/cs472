setTimeout(() => console.log('settimeout 1'), 0);
setTimeout(() => {
  console.log('settimeout 2');
  process.nextTick(() => console.log('nextTick inside setTimeout'));
}, 0);
setTimeout(() => console.log('settimeout 3'), 0);

Promise.resolve().then(() => console.log('Promise.resolve 1'));
Promise.resolve().then(() => console.log('Promise.resolve 2'));

process.nextTick(() => console.log('nextTick 1'));
process.nextTick(() => console.log('nextTick 2'));
