function process() {
  let i = 0;
  function innerProcess() {
    i += 1;
    return i;
  }
  return innerProcess;
}

let res = process();

console.log(res);
console.log("Calling res() first time:", res());
console.log("Calling res() second time:", res());
console.log("Calling res() third time:", res());
