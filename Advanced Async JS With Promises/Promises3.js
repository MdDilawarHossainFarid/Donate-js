/** 
Task : (Don't use promises only use callback)
1. write a function to download data from a url
2. Write a function to upload the file written in previous step to a new url
*/

function download(url, cb) {
  /**
   * Downloads contents from the given url and passed the
   * downloaded content to the given callback cb
   * */
  console.log("Starting to download data from", url);
  setTimeout(function downloadData() {
    console.log("Downloading completed");
    const content = "ABCD"; // assume dummy download content
    cb(content);
  }, 5000);
}

// download("www.xyz.com", function process(content) {
//   console.log("Downloaded data is ", content);
// });

function writeFile(data, cb) {
  /**
   * write the given data into a new file
   */
  console.log("Started writing a file with", data);
  setTimeout(function wrtie() {
    console.log("Completed writing the data in a file");
    const filename = "file.txt";
    cb(filename);
  }, 5000);
}

// writeFile("abcdef", function (name) {
//   console.log("File written with name", name);
// });

function upload(url, file, cb) {
  /**
   * uploads the data from a file to a given url
   */
  console.log("Started uploading", file, "on", url);
  setTimeout(function up() {
    console.log("upload completed");
    const response = "SUCCESS";
    cb(response);
  }, 2000);
}

download("www.xyz.com", function processDownload(content) {
  console.log("We are now going to proces the downloaded data");
  writeFile(content, function processWrite(filename) {
    console.log("We have downloaded and written the file, now will upload");
    upload("www.upload.com", filename, function processUpload(response) {
      console.log("We have uploaded with", response);
    });
  });
});
