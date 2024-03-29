const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

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
  else console.log(`Result: ${files}`);
});

// Register a listener
logger.on("messageLogged", function (arg) {
  console.log("Listener called", arg);
});

// Raise an event
logger.log("new message");
