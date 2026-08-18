const fs = require("fs");

console.log("hello backend");

fs.writeFile(
  "fileOne.txt",
  "this is file one an introduction to node js",
  (err) => {
    if (err) {
      console.log("unable to write file" + err);
    } else console.log("written success");
  },
);
