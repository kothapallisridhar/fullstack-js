function createPromise() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function process() {
      console.log("Timer completed");
      console.log("Rejecting the Promise");
      reject("Promise REJECTED");
    }, 0);
  });
}

let p = createPromise();

p.then(
  function fulfillHandler1(value) {
    console.log("Fulfill handler 1 completed with value: ", value);
  },
  function rejectHandler1(value) {
    console.log("Reject handler 1 completed with value: ", value);
  }
);
p.then(
  function fulfillHandler2(value) {
    console.log("Fulfill handler 2 completed with value: ", value);
  },
  function rejectHandler1(value) {
    console.log("Reject handler 2 completed with value: ", value);
  }
);

for (let i = 1; i < 10000000000; i++) {
  //some task
}
console.log("Ending");
