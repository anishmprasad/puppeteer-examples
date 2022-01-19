const puppeteer = require('puppeteer');

(async () => {
    const url = 'https://youtube.com'
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle0', //networkidle2
    });
    // Login
    await page.click('[aria-label*="Sign in"]');
    await page.waitForNavigation({
        waitUntil: 'networkidle0',
      });
    await page.type('#identifierId', "adasdasdasd");
    await page.click('.nCP5yc');
    await page.waitForNavigation({
        waitUntil: 'networkidle0',
      });
    
    await page.type('input[type="password"]', 'cccadsadsad')
    // await page.type('[name*="password"]', "asdsadsadsa");
    await page.click('.nCP5yc');
    // // await page.click('#u_0_b');
    // await page.waitForNavigation();

    // await page.pdf({ path: `document.pdf`, format: 'a4' });

    // await browser.close();
})();



// https://github.com/puppeteer/puppeteer/blob/v13.1.1/docs/api.md#pagepdfoptions
// https://news.ycombinator.com



// const puppeteer = require('puppeteer');
// (async () => {
// const browser = await puppeteer.launch({ headless: false})
// const page = await browser.newPage()

// const navigationPromise = page.waitForNavigation()

// await page.goto('https://accounts.google.com/')

// await navigationPromise

// await page.waitForSelector('input[type="email"]')
// await page.click('input[type="email"]')

// await navigationPromise

// //TODO : change to your email
// await page.type('input[type="email"]', 'youremail@gmail.com')
// await page.waitForSelector('#identifierNext')
// await page.click('#identifierNext')

// await page.waitFor(500);

// await page.waitForSelector('input[type="password"]')
// await page.click('input[type="email"]')
// await page.waitFor(500);
// //TODO : change to your password
// await page.type('input[type="password"]', 'yourpassword')

// await page.waitForSelector('#passwordNext')
// await page.click('#passwordNext')

// await navigationPromise

//await browser.close()
// })()