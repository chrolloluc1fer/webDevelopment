// read content of unorganised folder and make  an array which has extension name of each file

let fs = require("fs");
let path = require("path");

let readkapath = path.join(__dirname,"..","unorganised");

let content= fs.readdirSync(readkapath);
 let arr=[];
for(let i = 0; i < content.length; i++){
    arr[i] = path.extname(content[i])
}
console.log(arr);


