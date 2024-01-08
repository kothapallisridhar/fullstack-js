const logger = require("./logger");
const path = require("path");

var pathObj = path.parse(__filename);
console.log(pathObj);

function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello("Sridhar");

logger.log("Log message");
