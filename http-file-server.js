const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    var file = fs.createReadStream(process.argv[3]);
    file.on("open", () => {
      file.pipe(res);
    });
  })
  .listen(process.argv[2]);
//console.log(process.argv[2]);
