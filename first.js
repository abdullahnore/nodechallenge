var http = require("http");
var dt = require("./firstmodule");
var url = require("url");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(dt.datefunction());
    //res.write("\n" + req.url);
    var q = url.parse(req.url, true).query;
    text = q.year + q.month;
    res.end("\n helloworld" + text);
  })
  .listen(8080, function (error) {
    if (error) {
      console.log(" not working");
    } else {
      console.log("working");
    }
  });
