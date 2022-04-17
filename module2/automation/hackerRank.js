const puppeteer = require("puppeteer");
const mail = "cetiti7811@carsik.com";
const password = "chrollolucifer";
let browserPromise = puppeteer.launch({ headless: false, defaultViewport: null })

let page;

browserPromise.then(function (browser) {
    let pagePromise = browser.newPage();
    return pagePromise;
}).then(function (pageInstance) {
    page = pageInstance;
    let urlpromise = page.goto("https://www.hackerrank.com/");
    return urlpromise;
}).then(function () {

    let waitPromise = page.waitForSelector("ul.menu a");
    return waitPromise;

}).then(function () {
    let clickkapromise = page.click("a[data-event-action='Login']");
    return clickkapromise;
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
    let waitPromise = page.waitForSelector("[Data-automation='algorithms']");
    return waitPromise;
}).then(function () {
    let topicClickPromise = page.click("[Data-automation='algorithms']");
    return topicClickPromise;
}).then(function () {
    let warmupPromise = page.waitForSelector("[value=warmup]");
    return warmupPromise;
}).then(function () {
    let warmupClick = page.click("[value=warmup]");
    return warmupClick;
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
    let inputWait = page.waitForSelector('[type="checkbox"]');
    return inputWait;
}).then(function () {
    let inputClick = page.click('[type="checkbox"]');
    return inputClick;
}).then(function(){
    let waitPromise = page.waitForSelector("#input-2");
    return waitPromise;
}).then(function(){
    let clickInput = page.click("#input-2");
    return clickInput;
})



