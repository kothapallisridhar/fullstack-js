// setTimeout(() => {
//   console.log("Hello JavaScript");
// }, 3000);
/**
 *  Problems with Callbacks
 *  1. Inversion of Control
 *  2. Callback hell -> It's a readability problem
 */
// Inversion of Control
function doTask(fn, x) {
  // implementation is done by team A
  fn(x);
}

// due to callbacks, I'm passing control of how exec() should be called to doTask(). This is Inversion of Control
doTask(function exec(x) {
  console.log("Woah! number is: ", x * x);
}, 9);
