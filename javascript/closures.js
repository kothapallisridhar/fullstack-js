function process() {
    let i = 0;
    function innerProcess() {
        i += 1;
        return i;
    }
    return innerProcess;
}

let res = process();
console.log("Calling res 1st time", res());
console.log("Calling res 2nd time", res());
console.log("Calling res 3rd time", res());