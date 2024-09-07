function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function createPromiseWithLoop() {
    return new Promise(function (resolve, reject) {
        for(let i = 1; i < 10000000000; i++) { }
        let num = getRandomInt(6);
        if(num % 2 == 0) {
            resolve(num);
        } else {
            reject(num);
        }

    });
}
x = createPromiseWithLoop();
console.log(x);