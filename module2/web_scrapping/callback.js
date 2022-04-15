const fs = require("fs");


fs.readFile("file.txt", function (error, data) {
    if (error)
        console.log(error);
    else {
        console.log(data + "");
        fs.readFile("f2.txt", function (error, data) {
            if (error)
                console.log(error);
            else
                console.log(data + "");
        });
    }
});

console.log("After");
