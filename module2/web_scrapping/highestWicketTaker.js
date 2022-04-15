const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard";

request(link, cb);
function cb(error, response, html) {
    if (error)
        console.log(error);
    else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let bowlertable = document.querySelectorAll(".table.bowler");

        for (let i = 0; i < bowlertable.length; i++) {
            let rows = bowlertable[i].querySelectorAll(".table.bowler tbody tr");
            let max = 0;
            let name = '';
            for (let j = 0; j < rows.length; j++) {
                let tds = rows[j].querySelectorAll(".table.bowler tbody tr td");
               
                if (tds.length > 1) {
                    if (tds[4].textContent > max){
                        max = tds[4].textContent
                        name = tds[0].textContent;
                        
                    }
                  
                    
                }
               
            }
            console.log(name);
            console.log(max);
        }
    }
}

