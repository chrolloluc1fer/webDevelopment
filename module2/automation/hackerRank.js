const puppeteer = require("puppeteer");
const mail = "cetiti7811@carsik.com";
const password = "chrollolucifer";
const code = require('./code');
let browserPromise = puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-fullscreen'] })

let page;

browserPromise.then(function (browser) {

    let pagePromise = browser.newPage();
    console.log("brower open hogya")
    return pagePromise;
}).then(function (pageInstance) {
    page = pageInstance;
    let urlpromise = page.goto("https://www.hackerrank.com/");
    console.log("link Open hogya")
    return urlpromise;
}).then(function () {
    return waitAndClick("ul.menu a");
}).then(function () {
    let waitPromise = page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    return waitPromise;
}).then(function () {
    let domClickPromise = page.evaluate(function () {
        let btns = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        btns[1].click();
        return;
    });
    return domClickPromise;
}).then(function () {
    let waitPromise = page.waitForSelector("#input-1");
    return waitPromise;
}).then(function () {
    let mailTypePromise = page.type("#input-1", mail, { delay: 100 });
    return mailTypePromise;
}).then(function () {
    let passwordTypePromise = page.type("#input-2", password, { delay: 100 });
    return passwordTypePromise;
}).then(function () {
    let loginClickpromise = page.click("button[data-analytics='LoginPassword']");
    return loginClickpromise;
}).then(function () {
    return waitAndClick("[Data-automation='algorithms']");
}).then(function () {
    return waitAndClick("[value=warmup]");
}).then(function () {
    let linkPromise = page.evaluate(function () {
        let arr = [];
        let allChallenge = document.querySelectorAll(".js-track-click.challenge-list-item");
        for (let i = 1; i < allChallenge.length; i++) {
            arr.push(allChallenge[i].href);
        }
        return arr;
    })
    return linkPromise;
}).then(function (questionArr) {
    let questionPromise = questionSolver(questionArr[0], code.answers[0])
    return questionPromise;
})





function waitAndClick(selector) {
    return new Promise(function (resolve, reject) {
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function () {
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function () {
            resolve()
        })

    })
}


function questionSolver(link, solution) {
    new Promise(function (resolve, reject) {
        let linkPromise = page.goto(link);
        linkPromise.then(function () {
            return waitAndClick(".checkBoxWrapper input")
        }).then(function () {
            return waitAndClick("#input-1");
        }).then(function () {
            let typePromise = page.type("#input-1", solution);
            return typePromise;
        }).then(function () {
            let holdControl = page.keyboard.down("Control")
            return holdControl;
        }).then(function () {
            let holdA = page.keyboard.press("A");
            return holdA;
        }).then(function () {
            let holdX = page.keyboard.press("X");
            return holdX;
        }).then(function () {
            let leaveControl = page.keyboard.up("Control");
            return leaveControl;
        }).then(function () {
            return waitAndClick(".monaco-editor.no-user-select.vs");
        }).then(function () {
            let holdControl = page.keyboard.down("Control")
            return holdControl;
        }).then(function () {
            let holdA = page.keyboard.press("A");
            return holdA;
        }).then(function () {
            let holdV = page.keyboard.press("V");
            return holdV;
        }).then(function () {
            return waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
        }).then(function () {
            console.log("Success")
        })
    })
}

