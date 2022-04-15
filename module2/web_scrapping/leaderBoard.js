const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const xlxs = require("json-as-xlsx");


const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = [];
let counter = 0;

request(link, cb);

function cb(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allScorecardTags = document.querySelectorAll('.ds-border-b.ds-border-line');

        for (let i = 0; i < 60; i++) {
            let anchorTagAll = allScorecardTags[i].querySelectorAll("a");
            let link = anchorTagAll[2].href;
            let completeLink = "https://www.espncricinfo.com" + link;

            request(completeLink, cb2);
            counter++;
        }
    }
}

function cb2(error, response, html) {
    if (error) {
        console.log(error);
    } else {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let batsmenRow = document.querySelectorAll('tbody [class="ds-border-b ds-border-line ds-text-tight-s"]');
        for (let i = 0; i < batsmenRow.length; i++) {
            let cells = batsmenRow[i].querySelectorAll("td");
            if (cells.length == 8) {
                let name = cells[0].textContent;
                let runs = cells[2].textContent;
                let balls = cells[3].textContent;
                let fours = cells[5].textContent;
                let sixes = cells[6].textContent;

                processPlayer(name, runs, balls, fours, sixes);
            }
        }
        counter--;
        if (counter == 0) {
            let data = JSON.stringify(leaderboard);
            fs.writeFileSync('BatsmenStats.json', data);
            let dataExcel = [
                {
                sheet: "Details",
                columns: [
                    { label: "Name", value: "Name" },
                    { label: "Innings", value: "Innings" },
                    { label: "Runs", value: "Runs" },
                    { label: "Balls", value: "Balls" },
                    { label: "Fours", value: "Fours" },
                    { label: "Sixes", value: "Sixes" },
                ],
                content : leaderboard

                },
            ]
            let settings = {
                fileName: "BatsmanDetails", 
                extraLength: 3, 
                writeOptions: {}, 
              }
              
              xlxs(dataExcel, settings) 

        }

    }
}


function processPlayer(name, runs, balls, fours, sixes) {
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for (let i = 0; i < leaderboard.length; i++) {
        let playerObj = leaderboard[i];
        if (playerObj.Name == name) {
            //will do some work here
            playerObj.Runs += runs;
            playerObj.Innings += 1;
            playerObj.Balls += balls;
            playerObj.Fours += fours;
            playerObj.Sixes += sixes;
            return;
        }
    }


    let obj = {
        Name: name,
        Innings: 1,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixes: sixes
    }
    leaderboard.push(obj);
}




