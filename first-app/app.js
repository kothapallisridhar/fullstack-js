const logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");

var pathObj = path.parse(__filename);
console.log(pathObj);

function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello("Sridhar");

logger.log("Log message");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory ${totalMemory}`);
console.log(`Free Memory ${freeMemory}`);
var files = fs.readdir("./", (err, files) => {
  if (err) console.log(err);
  else console.log(`Result ${files}`);
});
console.log(files);
