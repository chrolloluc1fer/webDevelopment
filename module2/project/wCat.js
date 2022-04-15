let inputArr = process.argv.slice(2);
let commandArr = [];
let fileArr = [];

for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == '-') {
        commandArr.push(inputArr[i]);
    }
      else{
        fileArr.push(inputArr[i])
    }
    
}

let path = require("path");
let fs = require("fs");

//read
let content = "";
if(fileArr.length == 0){
    console.log("Enter a file to continue !!!")
}
else{
for (let i = 0; i < fileArr.length; i++) {
    let buffer = fs.readFileSync(fileArr[i], 'utf-8');
    content += buffer + "\r\n";
}

let contentArr = content.split("\r\n");


//-s
if (commandArr.includes("-s")) {
    for (let i = 1; i < contentArr.length; i++) {
        {
            if (contentArr[i] == "" && contentArr[i - 1] == "") {
                contentArr[i] = null;
            } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
                contentArr[i] = null;
            }
        }
    }
    let tempArr = [];
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            tempArr.push(contentArr[i]);
        }
    }
    contentArr = tempArr;
  
}

//-n
if (commandArr.includes("-n")) {
    for (let i = 0; i < contentArr.length; i++) {
        if (i == contentArr.length - 1)
            break;
        contentArr[i] = i + 1 + " " + contentArr[i];
    }
}

//-b
if (commandArr.includes("-b")) {

    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] == "") {
            contentArr[i] = null;
        }
    }
    
    let idx = 1;
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
            contentArr[i] = idx + " " + contentArr[i];
            idx++;
        }
        else if (contentArr[i] == null) {
            contentArr[i] = "";
        }
    }

  
}
console.log(contentArr.join("\n"));
}
