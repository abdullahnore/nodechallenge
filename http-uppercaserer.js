const http = require("http");
const map = require("through2-map");
http
  .createServer((req, res) => {
    if (req.method !== "POST") {
      return res.end("wrong request");
    }

    req
      .pipe(
        map(function (chunk) {
          return chunk.toString().toUpperCase();
        })
      )
      .pipe(res);
  })
  .listen(process.argv[2]);
// var nasme = "sss";
// console.log(nasme.toUpperCase());
