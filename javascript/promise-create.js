const cart = ["shoes", "shorts", "shirts"];

const promise = createOrder(cart); // orderId
console.log(promise);

promise.then(function(orderId) {

    console.log("OrderId: ", orderId)
    //proceedToPayment(orderId);
})
.catch(function(err) {
    console.log(err.message);
})

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) {
        if(!validateCart(cart)) {
            const err = new Error("Cart is not valid!");
            reject(err);
        } 
        const orderId = "12345";
        if(orderId) {
            setTimeout(function() {
                resolve(orderId);
            },3000)
            
        }
    });

    return pr;
}

function validateCart(cart) {
    return true;
}