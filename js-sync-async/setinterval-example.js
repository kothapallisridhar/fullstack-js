let x = setInterval(function () {
  console.log("Hello World!");
}, 1000);

console.log(typeof x);
clearInterval(x);
