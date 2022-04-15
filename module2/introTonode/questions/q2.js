// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type


let  arr=['Audio','Video','Image','Software','Documents','Applications','Other']
let files=['abc','ert','fsd','fsa']
let ext=['.mp3','.mp4','.img','.exe','docs','.exe','.zip']

let path = require("path");
let fs = require("fs");

let organisekafolder = path.join(__dirname,"Organise")
if(!fs.existsSync(organisekafolder))
    fs.mkdirSync(organisekafolder);
console.log(organisekafolder);


for(let i = 0 ; i < arr.length; i++){
    let folderkapath = path.join(organisekafolder,arr[i]);
    if(!fs.existsSync(folderkapath))
    fs.mkdirSync(folderkapath,);

    for(let j = 0; j < files.length; j++){
        let filename = files[j] + ext[i];
        let filekapath = path.join(folderkapath,filename);

        fs.writeFileSync(filekapath,"");

    }
}













