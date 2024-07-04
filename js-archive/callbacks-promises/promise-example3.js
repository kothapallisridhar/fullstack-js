// Predict the output of the following code

function blockingForLoop() {
  for (let i = 0; i < 10000000000; i++) {
    //something
  }
}
console.log("Start of the file");
setTimeout(function timer1() {
  console.log("Timer 1 done");
});
blockingForLoop();
let x = Promise.resolve("I AM RICH");
x.then(function processPromise(value) {
  console.log("Who is RICH?...", value);
  blockingForLoop();
});

let y = Promise.resolve("I AM HAPPY");
y.then(function processPromise(value) {
  console.log("Who is HAPPY?...", value);
  setTimeout(function timer() {
    console.log("Timer OK DONE");
  }, 0);
});

let z = Promise.resolve("I AM SUCCESSFULL");
z.then(function processPromise(value) {
  console.log("Who is SUCCESSFULL?...", value);
});
setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);
console.log("End of the file");
