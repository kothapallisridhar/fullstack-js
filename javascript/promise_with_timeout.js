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
y = createPromiseWithTimeout();
console.log(y);