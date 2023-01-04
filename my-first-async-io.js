const fs = require("fs");
fs.readFile(process.argv[2], "utf8", function (err, res) {
  if (err) {
    throw err;
  }

  console.log(res.split("\n").length - 1);
});
