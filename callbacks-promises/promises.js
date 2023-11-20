/**
 *  1. Readability Enhancers
 *
 *  2. Promises solve the problem of Inversion of Control (IoC)
 *
 *  3. In JavaScript, Promises are special type of Objects that get
 *  returned immediately when we call them
 *
 *  4. Promises acts as a placeholder for the data we hope to get back
 *  sometime in future
 *
 *  5. In these Promise objects, we can attach the functionality we want to
 *  execute once the future task is done.
 *
 *  6. Once the future task is done, Promises will automatically execute the
 *  attached functionality.
 */

/**
 *  1. How we can create a Promise?
 *     Creation of the Promise object is synchronous in nature.
 *  2. How we can consume a Promise?
 *
 *  May be we fulfill the Promise!
 *  May be we don't fulfill the Promise!
 *
 *  Promise object states: PENDING, FULFILLED, REJECTED
 *  When we create a new promise object, PENDING is the default state.
 *
 *  PENDING -> (work in progress)
 *  FULFILLED -> if the operation is completed successfully
 *  REJECTED -> if operatoin was not successful, then it will go in REJECTED
 *              state
 */
