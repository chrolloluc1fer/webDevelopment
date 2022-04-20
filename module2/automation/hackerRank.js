const puppeteer = require("puppeteer");
const mail = "cetiti7811@carsik.com";
const password = "chrollolucifer";
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
    let questionWaitPromise = page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
    return questionWaitPromise;
}).then(function () {
    let allQuestion = page.evaluate(function () {
        let question = document.querySelectorAll(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
        question[1].click();
        return;
    })
    return allQuestion;
}).then(function () {
    return waitAndClick('[type="checkbox"]');
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


