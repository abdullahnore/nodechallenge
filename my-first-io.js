const fs = require("fs");
str = fs.readFileSync(process.argv[2]);
sum = str.toString().split("\n").length - 1;
console.log(sum);
