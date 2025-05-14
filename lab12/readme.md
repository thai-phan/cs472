1. Pls answer the following:

What is LibUV?

LibUV is a multi-platform C library that provides asynchronous I/O and event loop functionality. 
It was originally developed for Node.js but can be used independently in C/C++ applications.

LibUV is the engine behind Node.js’s asynchronous behavior. Here’s how:

| Node.js Feature               | Handled By LibUV   |
| ----------------------------- | ------------------ |
| `setTimeout`, `setInterval`   | Yes (Timers phase) |
| `fs.readFile`, `fs.writeFile` | Yes (via thread pool) |
| Network I/O (`http`, `net`)   | Yes (async sockets) |
| DNS resolution (some cases)   | Yes (in thread pool) |
| Event Loop                    | Entirely managed by LibUV |
| `setImmediate`                | Yes (Check phase)  |


LibUV defines the phases of the event loop in Node.js:

    Timers – Executes setTimeout/setInterval callbacks

    Pending Callbacks

    Idle/Prepare

    Poll – Waits for I/O

    Check – Executes setImmediate

    Close Callbacks

➡️ Between each phase, Node runs:

    process.nextTick() queue (first)

    Microtasks (Promises)



Explain the difference between setImmediate(f) and setTimeout(f, Time)?

| Feature             | `setImmediate(fn)`                        | `setTimeout(fn, 0)`                                |
| ------------------- | ----------------------------------------- | -------------------------------------------------- |
| **Phase**           | **Check phase**                           | **Timers phase**                                   |
| **Execution Time**  | After I/O events (right after poll phase) | After the specified timeout (min \~1ms, even if 0) |
| **Guarantee Order** | More predictable after I/O                | Less predictable                                   |
| **Use Case**        | Run *immediately* after I/O callbacks     | Run *after* a minimum delay                        |


Explain the difference between process.nextTick(f) and setImmediate(f)?

| Feature      | `process.nextTick(fn)`                               | `setImmediate(fn)`                             |
| ------------ |------------------------------------------------------| ---------------------------------------------- |
| **Phase**    | *Before* the next event loop tick (microtask queue)  | **Check phase** (after I/O events)             |
| **Executes** | Immediately after the current operation completes    | After I/O and timers (in next event loop tick) |
| **Priority** | Higher priority – runs before any other I/O or timer | Lower priority                                 |
| **Use case** | Deferring work to the end of the current phase       | Running logic after I/O or async tasks         |

2. Pls write down the output without executing the following code snippets and check it with result.

```javascript
const fs = require('fs');
//you may assume input.txt is in the same folder
const rd = fs.createReadStream("input.txt");
rd.close();
rd.on("close", () => console.log('readablStream close event'))
fs.readFile('input.txt', "utf-8", (error, data) => {
    if (error) console.log(error);
    else console.log(data)
});
setTimeout(() => console.log("this is setTimeout"), 5000);
setTimeout(() => console.log("this is setTimeout"), 0);
setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
    console.log("this is setImmediate 2")
    Promise.resolve().then(() => console.log('Promise.resolve inside setImmediate'));
});
Promise.resolve().then(() => console.log('Promise.resolve 1'));
Promise.resolve().then(() => {
    console.log('Promise.resolve 2')
    process.nextTick(() => console.log('nextTick inside Promise'));
});
process.nextTick(() => console.log('nextTick 1'));
```

nextTick 1
Promise.resolve 1
Promise.resolve 2
nextTick inside Promise
this is setTimeout 0
this is setImmediate 1
this is setImmediate 2
Promise.resolve inside setImmediate
readable Stream close event2222
file data: 123
this is setTimeout 5000