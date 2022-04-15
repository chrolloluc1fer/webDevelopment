//move a file

let path = require("path");
let fs = require("fs");

let src = path.join(__dirname,"file1.txt");
let dest = path.join(__dirname,"newFolder","file1.txt");

fs.copyFileSync(src,dest);
fs.unlinkSync(src);