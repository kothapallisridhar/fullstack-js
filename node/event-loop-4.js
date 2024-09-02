const fs = require("fs");

setImmediate(() => { console.log("setImmediate"); })

setTimeout(() => { console.log("Timer Completed", 0); })

Promise.resolve("Promise").then(() => { console.log("Promise"); })

fs.readFile("./file.txt", "utf8", () => {
    console.log("File reading CB");
})

process.nextTick(() => { 
    process.nextTick(() => console.log("Inner nextTick"))
    console.log("process.nextTick"); 
});

console.log("last line of the file");