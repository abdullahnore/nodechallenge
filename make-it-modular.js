const filter = require("./mymodule");
const dir = process.argv[2];
const extpath = process.argv[3];
var callback = function (err, list) {
  if (err) {
    throw err;
  }
  list.forEach(function (file) {
    console.log(file);
  });
};
filter(dir, extpath, callback);
