// predict the output of following code
console.log("Hello World!");
for (let i = 0; i < 3; i++) {
  setTimeout(function exec() {
    console.log("Timer done");
  }, 20);
}
for (let i = 0; i < 10000000000; i++) {
  // some task
}
console.log("End");
