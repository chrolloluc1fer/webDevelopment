const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const xlxs = require("json-as-xlsx");

const link = "https://github.com/topics";

let data = [];
let counter = 0;
request(link, cb);


//For topics

function cb(error, response, html) {
    if (error) {
        console.log(error);
    }
    const dom = new JSDOM(html);
    const document = dom.window.document;
    let topics = document.querySelectorAll('.topic-box a');
    for (let i = 0; i < topics.length; i++) {
        let links = topics[i].href;
        let completeLink = 'https://github.com' + links;
        // console.log(completeLink);
        request(completeLink, cb2);
    }

}

//For subtopics
function cb2(error, response, html2) {
    if (error) {
        console.log(error);
    }
    else {
        const dom = new JSDOM(html2);
        const document = dom.window.document;
        let subtopics = document.querySelectorAll('a.text-bold.wb-break-word');
        for (let i = 0; i < 5; i++) {
            let subTopicsLinks = subtopics[i].href;
            let completeLink = 'https://github.com' + subTopicsLinks;
            // console.log(completeLink);
            request(completeLink, cb3)
        }
    }
}


// For issues
function cb3(error, response, html3) {
    if (error) {
        console.log(error)
    }
    else {
        const dom = new JSDOM(html3);
        const document = dom.window.document;
        let issueLinks = document.querySelectorAll('#issues-tab');
            let completeIssueLinks = 'https://github.com' + issueLinks[0].href;
            request(completeIssueLinks, cb4)
        
    }
}


// For MainContent
function cb4(error, response, html4) {
    if (error) {
        console.log(error)
    }
    else {
        const dom = new JSDOM(html4);
        const document = dom.window.document;
        let link = document.querySelectorAll('a[data-hovercard-type="issue"]');

        for (let i = 0; i < 5; i++) {
            let heading = link[i].textContent;
            let headingLink = link[i].href;
            let completeHeadingLink = 'https://github.com' + headingLink;
            // console.log(completeHeadingLink);
            // console.log(heading);
            processData(heading, completeHeadingLink);
        }

    }
    let datas = JSON.stringify(data);
    fs.writeFileSync('githubData.json', datas);

    let dataExcel = [
        {
        sheet: "GitHubScrapping",
        columns: [
            { label: "Heading", value: "Heading" },
            { label: "Link", value: "Link" },
           ],
        content : data
        },
    ]
    let settings = {
        fileName: "GitHubScrap", 
        extraLength: 1, 
        writeOptions: {}, 
      }
      
      xlxs(dataExcel, settings) 
}



function processData(heading, headingLink) {
    let obj = {
        Heading: heading,
        Link: headingLink
    }
    data.push(obj);
}
