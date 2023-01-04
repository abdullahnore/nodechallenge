const fs = require("fs");
const path = require("path");

function filter(dir, extpath, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err);
    }
    list = list.filter(function (file) {
      if (path.extname(file) === "." + extpath) {
        return true;
      }
    });
    callback(err, list);
  });
}
//

module.exports = filter;
