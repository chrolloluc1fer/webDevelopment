//read content of unorganised folder and print each file type
//for example abc.mp3 --> print audio file

let path = require("path");
let fs = require("fs");

let unorganisedpath = path.join(__dirname,"..","unorganised");

let content = fs.readdirSync(unorganisedpath);

for(let i = 0; i < content.length; i++){
    let extname = path.extname(content[i]);

    if(extname == ".jpg")
    console.log("Image File")

    if(extname == ".mp3")
    console.log("Audio File")

    if(extname == ".mp4")
    console.log("Video File")

    if(extname == ".zip")
    console.log("Zip File")

    if(extname == ".xlsx")
    console.log("Excel File")

    if(extname == ".doc")
    console.log("Document File")

    if(extname == ".pdf")
    console.log("Other File")

}
