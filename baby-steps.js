const { argv } = require("process");
var sum = 0;
for (var i = 2; i < argv.length; i++) {
  sum += Number(process.argv[i]);
}
console.log(sum);
