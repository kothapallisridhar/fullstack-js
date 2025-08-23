
// Promise.all([p1, p2, p3])
// kind of like a fail fast
// even if one fails, it will quickly gives you the result even if others are success
/**
 *  used to make multiple api calls
 *  if all success: output: array with result of all the calls
 *  result: [val1, val2, val3] 
 *  wait of all of them to finish and collect the results in an array
 *  if any of the Promise is failed: Promise.all() will throw an error, output will be an error
 *  
 *  as soon as error happened, it will return an error,
 *  it will not wait for other Promises to be done
 */
// used to make multiple api calls

// Promise.allSettled([p1, p2, p3])
/**
 *  used to make multiple api calls
 *  if all success: output: array with result of all the calls
 *  result: [val1, val2, val3] 
 *  wait of all of them to finish and collect the results in an array
 *  if any of the Promise is failed: Promise.all() will throw an error, output will be an error
 *   
 *  if any of the promise get failed, 
 *  it will wait for all other Proimses to be settled
 *  after all Promises are done, then 
 *  it will give you all the results irrespective of success of failure. 
 */  

// Promise.race([p1, p2, p3])
/**
 * Promise which will finish first will be the winner
 * as soon as first promise is resolved, it will give you the value
 * 
 * if error happens, it will return error, it will not wait for other promises to be settled
 */

// Promise.any([p1, p2, p3])
/**
 * it is very much similar to race
 * it will wait for the first promise to get successfull
 * irrespective of the success or failure of the promises finished
 * it will wait for success and return the result of first succesful promise
 * 
 * if all are failed, then the result will be an aggregated error
 * it will be an array of the error values of all of them
 * [err1, err2, err3]
 */

const p1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("P1 success");
        //reject("P1 fail")
    }, 3000);

})

const p2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        //resolve("P2 success")
        reject("P2 fail");
    }, 1000);

})

const p3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        //resolve("P3 success");
        reject("P3 fail");
    }, 2000);

})

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.error(err);
// });

// safest option among all other apis
Promise.allSettled([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.error(err);
});

// Promise.race([p1, p2, p3]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.error(err);
// });

Promise.any([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.error(err);
});

