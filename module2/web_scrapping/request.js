const request = require('request');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-kolkata-knight-riders-final-1254117/full-scorecard"

request(link, cb);

function cb(error, response, html) {

        const dom = new JSDOM(html);
        const document = dom.window.document;
        let teamName = document.querySelectorAll(".match-info.match-info-MATCH.match-info-MATCH-half-width .teams .name");
        for(let i = 0; i < teamName.length; i++){
        console.log(teamName[i].textContent)
        }
    }
