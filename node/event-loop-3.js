const fs = require("fs");
const a = 100;

setImmediate(() => { console.log("setImmediate"); })

setTimeout(() => { console.log("Timer Completed", 0); })

Promise.resolve("Promise").then(() => { console.log("Promise"); })

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => {
        console.log("2nd timer", 0);
    })
    process.nextTick(() => {
        console.log("2nd nextTick");
    })
    setImmediate(() => { console.log("2nd setImmediate")});
    console.log("File reading CB");
})


process.nextTick(() => { console.log("process.nextTick"); })

function printA() {
    console.log("a = ", a);
}

printA();
console.log("last line of the file");




