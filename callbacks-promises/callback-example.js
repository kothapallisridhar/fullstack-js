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

download("www.xyz.com", function process(content) {
  console.log("Downloaded data is: ", content);
});
