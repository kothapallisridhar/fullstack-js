const logger = require("./logger");
const path = require("path");
const os = require("os");

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
