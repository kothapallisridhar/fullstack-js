function download(url, cb) {
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
