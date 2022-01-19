const puppeteer = require('puppeteer');

(async () => {
    const url = 'https://youtube.com'
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle2',
    });
    await page.pdf({ path: `${url}.pdf`, format: 'a4' });

    await browser.close();
})();



// https://github.com/puppeteer/puppeteer/blob/v13.1.1/docs/api.md#pagepdfoptions
// https://news.ycombinator.com