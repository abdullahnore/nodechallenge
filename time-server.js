const { Server } = require("http");
const net = require("net");
net
  .createServer((socket) => {
    //socket handling logic
    var data = currentDate();

    socket.write(data);
    socket.end("\n");
  })
  .listen(process.argv[2]);

var currentDate = () => {
  var date = new Date();
  return (
    date.getFullYear() +
    "-" +
    date.getMonth() +
    1 +
    "-" +
    (date.getMonth() < 10 ? "0" : "") +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    (date.getMinutes() < 10 ? "0" : "") +
    date.getMinutes()
  );
};
