function process() {
    let i = 0;
    let j = [1,2,3];
    let k = 3;
    function innerProcess() {
        i += 1;
        let p = j;
        return {i, p};
    }
    return innerProcess;
}

let res = process();
console.log("Calling res 1st time", res());
console.log("Calling res 2nd time", res());
console.log("Calling res 3rd time", res());