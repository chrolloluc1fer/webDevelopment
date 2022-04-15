//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let path = require("path");
let fs = require("fs");

if(!fs.existsSync("newFolder"));
    fs.mkdirSync("newFolder");


let contentPath = path.join(__dirname,"newFolder","newfile.txt");
fs.writeFileSync(contentPath,"new file has been made");






