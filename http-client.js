const http = require("http");
http.get(process.argv[2], function callback(res) {
  var data = "";
  res.on("data", function (chunk) {
    data += chunk + "\n";
  });
  res.on("end", function () {
    console.log(data);
  });
});
