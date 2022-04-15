let folderPath = process.argv[2];


let path = require("path");
let fs = require("fs");

let folderexist = fs.existsSync(folderPath);

let extensions = {
    Audio : [".mp3"],
    Video : [".mp4", ".mkv", ".mov"],
    Image : [".jpeg", ".png", ".jpg", ".gif"],
    Document : [".doc", ".xlsx", ".pdf", ".txt"],
    Software : [".exe"]
}

if(folderexist){

let files = fs.readdirSync(folderPath);
for(let i = 0; i < files.length; i++){
    let ext = path.extname(files[i])
    let nameOfFolder = giveFolderName(ext);
    let pathOfFolder = path.join(folderPath,nameOfFolder); 
        let exist = fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }
    
    }
    
    
    }

else{
    console.log("Please Enter a Valid Path");
}

function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];
        for(let j = 0; j < extArr .length; j++){
            if(extArr[j] == ext){
                return key;
            }
        }
    }
    return 'Other';
}

function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}