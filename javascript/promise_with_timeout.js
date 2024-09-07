function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function() {
        let num = getRandomInt(6);
        if(ran % 2 == 0) {
            resolve(ran);
        } else {
            reject(ran);
        }
        }, 10000)
        
    });
}
y = createPromiseWithTimeout();
console.log(y);