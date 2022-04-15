//copy index.html file from module1 to a new folder inside module2 having name html.

let path=require("path");
let fs=require("fs");

if(!fs.existsSync("html"))
fs.mkdirSync("html");
let src = path.join(__dirname,"..","..","..","module1","index.html");

let dest = path.join(__dirname,"html","index.html")

fs.copyFileSync(src,dest);






