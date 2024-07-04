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

async function steps() {
  const downloadedData = await download("www.xyz.com");
  console.log("Data downloaded is:", downloadedData);
  const fileWritten = await writeFile(downloadedData);
  console.log("file written is:", fileWritten);
  const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
  console.log("Upload response is:", uploadResponse);
  return uploadResponse;
}

steps();
