- 1. Readability Enhancers
-
- 2. Promises solve the problem of Inversion of Control (IoC)
-
- 3. In JavaScript, Promises are special type of Objects that get
- returned immediately when we call them
-
- 4. Promises acts as a placeholder for the data we hope to get back
- sometime in future
-
- 5. In these Promise objects, we can attach the functionality we want to
- execute once the future task is done.
-
- 6. Once the future task is done, Promises will automatically execute the
- attached functionality.

- 1. How we can create a Promise?
-     Creation of the Promise object is synchronous in nature.
- 2. How we can consume a Promise?
-
- May be we fulfill the Promise!
- May be we don't fulfill the Promise!
-
- Promise object states: PENDING, FULFILLED, REJECTED
- When we create a new promise object, PENDING is the default state.
-
- PENDING -> (work in progress)
- FULFILLED -> if the operation is completed successfully
- REJECTED -> if operatoin was not successful, then it will go in REJECTED
-              state

## CREATING A PROMISE

new Promise(callback/executor)

new Promise(function(resolve, reject) {
// inside this function, we can write our
// time consuming task
// resolve and reject are inbuilt functoins
})

- Whenever in the implementation of executor callback, you call the resolve function, the promise goes to a FULFILLED state,
- if you call reject function, it goes to a REJECTED state.
- And if you don't call anyting, Promise remains in PENDING state.

PENDING -> value of Promise object -> undefined
FULFILLED -> value of Promise object -> which is passed as argument to "resolve" function
REJECTED -> value of Promise object -> which is passed as argument to "reject" function

1. At the time the Constructor generates a new Promise object, it also generates a pair of functions called as "resolve" and "reject"
2. Generally the executor callback wraps some async or synchronous operations.
3. The "executor" is called "synchronously".

-> Read MDN promise documentation

## CONSUMING A PROMISE

- Attach the functionality that we need to execute once the Promise is
  FULFILLED OR REJECTED
- We can attach the functionality after some time.
- We don't need to attach the functionality immediately.
- p.then(fulfillmentHandler, rejectionHandler)
- we have to implement the handler functions ourselves.

# Microtask queue

- At any point of time, if event loop has a choice to pick from "microtask queue"
  or "callback queue"(macrotask queue), then it always give preference to
  "microtask queue".

# Priority Order

Callstack > Microtask queue > Callback queue/ Macrotask queue
(along with)
Global code
