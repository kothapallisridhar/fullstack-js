function getRandomInt(num) {
    return Math.floor(Math.random() * num)
}

function promiseWithLoop() {
    return new Promise(function (resolve, reject) {
        for(let i = 1; i < 10000000000; i++) { }
        let ran = getRandomInt(6);
        if(ran % 2 == 0) {
            resolve(ran);
        } else {
            reject(ran);
        }

    });
}
x = promiseWithLoop();
console.log(x);