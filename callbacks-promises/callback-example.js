// Don't use promises. Only use callbacks
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the file name
// 3. Write a function to upload the file written in previous step to a new url.

function download(url, cb) {
  /**
   * Downloads content from the given url and passed the
   * downloaded content to the given callback cb
   */
  console.log("Starting to download data from: ", url);
  setTimeout(function down() {
    console.log("Download completed");
    let data = "ABCDEF";
    cb(data);
  }, 3000);
}

function writeFile(data, cb) {
  console.log("Started writing file with data: ", data);
  setTimeout(function write() {
    console.log("Completed writing the data in a file");
    const fileName = "file.txt";
    cb(fileName);
  }, 3000);
}

function upload(url, file, cb) {
  /**
   * uploads the data from a file to a url
   */
  console.log("Started uploading ", file, " on ", url);
  setTimeout(function up() {
    console.log("Upload completed");
    const response = "SUCCESS";
    cb(response);
  });
}
// download("www.xyz.com", function process(content) {
//   console.log("Downloaded data is: ", content);
// });
// writeFile("ABCDEF", function process(name) {
//   console.log("File written with name: ", name);
// });

download("www.xyz.com", function processDownload(content) {
  console.log("We are now going to process the downloaded data");
  writeFile(content, function processWrite(fileName) {
    console.log("We have downloaded and written the file. Now we will upload");
    upload("www.upload.com", fileName, function processUpload(response) {
      console.log("we have uplaoded with", response);
    });
  });
});
