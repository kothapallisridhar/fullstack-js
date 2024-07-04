function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("Resolving the Promise");
    resolve("Promise RESOLVED");
  });
}

setTimeout(function process() {
  console.log("Timer completed");
}, 0);

let p = createPromise();

p.then(
  function fulfillHandler1(value) {
    console.log("Fulfill handler 1 completed with value: ", value);
  },
  function rejectHandler1() {}
);
p.then(
  function fulfillHandler2(value) {
    console.log("Fulfill handler 2 completed with value: ", value);
  },
  function rejectHandler1() {}
);
p.then(
  function fulfillHandler3(value) {
    console.log("Fulfill handler 3 completed with value: ", value);
  },
  function rejectHandler1() {}
);

for (let i = 1; i < 10000000000; i++) {
  //some task
}
console.log("Ending");
