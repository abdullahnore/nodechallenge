const http = require("http");
const async = require("async");
/* iterating without  using async lib */
// let i;
// var j = process.argv.length;
// for (i = 2; i < j; i++) {
//   http
//     .get(process.argv[i], function callback(res) {
//       var data = "";
//       res.on("data", (chunk) => {
//         data += chunk;
//       });
//       res.on("end", () => {
//         console.log(data);
//       });
//     })
//     .on("error", (error) => {
//       console.log("0error");
//     });
// }
var urls = process.argv.splice(2);

async.eachSeries(urls, function (url, callnext) {
  console.log(url);
  http.get(url, (res) => {
    var data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log(data);
    });
    callnext();
  });
});
