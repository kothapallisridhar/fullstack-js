function fetchData(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started downloading from url: ", url);
    setTimeout(function processDownloading() {
      let data = "Dummy Data";
      resolve(data);
      console.log("Download Completed!");
    }, 7000);
  });
}

console.log("Start");
let promiseObj = fetchData("abcdefghurl");
promiseObj.then(function a(value) {
  console.log("Value is: ", value);
});
console.log("End");
