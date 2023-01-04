const http = require("http");

http.get(process.argv[2], function callback(res) {
  var data = "";
  res.on("data", function (chunk) {
    data += chunk;
  });
  res.on("end", () => {
    // data = data.length + " " + data;
    console.log(data.length);
    console.log(data);
  });
});
