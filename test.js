const fs = require("fs");

setTimeout(() => { console.log("called 1") }, 0); // timer
setTimeout(() => { console.log("called 6") }, 1); //timer
console.log("called 2") //sync
fs.readFile("./test.html", (err, data) => {
    console.log(data)
}) // I/O Poll

new Promise((resolve, reject) => {
    setTimeout(() => resolve(2 + 3), 0)
}) // microtask
    .then(() => { console.log("called 3") })

new Promise((resolve, reject) => {
    setTimeout(() => resolve(2 + 3), 0)
}) //microtask
    .then(() => { console.log("called 7") })
process.nextTick(() => console.log("called 8")) //microtask
setImmediate(() => { console.log("called 4") }) // check 
console.log("called 5") //sync
