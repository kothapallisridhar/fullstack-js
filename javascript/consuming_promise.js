function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function() {
        let num = getRandomInt(6);
        if(num % 2 == 0) {
            resolve(num);
        } else {
            reject(num);
        }
        }, 10000)
        
    });
}
console.log("Starting");
let p = createPromiseWithTimeout();
console.log("We are now waiting for Promise to complete");
console.log("Curretly my promise object is like....", p);

p.
then(function fulfillHandler(value) { 
    console.log("Inside fulfill handler with value:", value);
    console.log("Promise after fulfillment is: ", p)
    }, 
     function rejectionHandler(value) { 
        console.log("Inside rejection hanlder with value:", value);
        console.log("Promise after rejection is: ", p);
    });