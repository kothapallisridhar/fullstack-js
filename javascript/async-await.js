
const API_URL = "https://api.github.com/users/kothapallisridhar";
const API_URL2 = "https://api.github.com/users/akshaymarch7";

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value!");
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value!");
    }, 10000);
});

// async and await are used to handle promises
// await can only be used inside your async function

async function handlePromise() {
    console.log("Hello World!");
    // JS engine was waiting for the promise to be resolved
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}

async function handlePromise2() {

    try {
        const data = await fetch(API_URL);
        const jsonvalue = await data.json()
        console.log(jsonvalue);    
    } catch(err) {
        console.log(err);
    }
    
    // fetch() => Response.json() => jsonvalue
}

//handlePromise();
handlePromise2();

function getData() {
    // JS engine will not wait for the promise to be resolved
    p1.then(res => console.log(res));
    p2.then(res => console.log(res));
    console.log("Namaste JavaScript");
}

//getData();
