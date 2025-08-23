

const p = new Promise((resolve, reject) => {
    resolve("Promise resolved value!")
})

// async and await are used to handle promises
// await can only be used inside your async function

async function handlePromise() {
    const val = await p;
    console.log(val);
}

handlePromise();

// function getData() {
//     p.then(res => console.log(res));
// }

// getData();
