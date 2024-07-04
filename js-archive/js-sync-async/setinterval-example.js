let x = setInterval(function () {
  console.log("Hello World!");
}, 1000);

console.log(typeof x); // return type is "object" in node environment
clearInterval(x);
