// Don't use callbacks. Only use Promises
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the file name
// 3. Write a function to upload the file written in previous step to a new url.

function download(url) {
  /**
   * Downloads content from the given url and passed the
   * downloaded content to the given callback cb
   */
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to download data from: ", url);
    setTimeout(function down() {
      console.log("Download completed");
      let data = "ABCDEF";
      resolve(data);
    }, 3000);
  });
}

function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started writing file with data: ", data);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const fileName = "file.txt";
      resolve(fileName);
    }, 3000);
  });
}

function uploadData(url, file) {
  /**
   * uploads the data from a file to a url
   */
  return new Promise(function exec(resolve, reject) {
    console.log("Started uploading ", file, " on ", url);
    setTimeout(function up() {
      console.log("Upload completed");
      const response = "SUCCESS";
      resolve(response);
    }, 3000);
  });
}
// download("www.xyz.com", function process(content) {
//   console.log("Downloaded data is: ", content);
// });
// writeFile("ABCDEF", function process(name) {
//   console.log("File written with name: ", name);
// });

download("www.xyz.com")
  .then(function processDownload(value) {
    console.log("Downloading done with following value:", value);
    return writeFile(value);
  })
  .then(function processWrite(value) {
    console.log("Data written in file with name:", value);
    return uploadData(value);
  })
  .then(function processUpload(value) {
    console.log("We have uploaded with:", value);
  });
