const puppeteer = require("puppeteer");

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
    
    let waitPromise = page.waitForSelector("ul.menu a")
    return waitPromise;

}).then(function (){
    page.click("a[data-event-action='Sign Up']")
    return;
})
