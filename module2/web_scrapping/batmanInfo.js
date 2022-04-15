const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";

request(link, cb)

function cb(error, response, html) {
    if (error) {
        console.log(error);
    }
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsman = document.querySelectorAll(".batsman-cell.text-truncate.out a");
        for (let i = 0; i < batsman.length; i++) {
            let batsmanLink = batsman[i].href;
            let completeLink = "https://www.espncricinfo.com" + batsmanLink;
            request(completeLink, cb2);
        }

    }

}
function cb2(error, response, html){
    if(error){
        console.log(error);
    }    
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let info = document.querySelectorAll(".player-card-padding h5");
        console.log("Batsman Name-----> " ,info[0].textContent,"                      ","Batsman DOB------> ",info[1].textContent);
    }
}

