const puppeteer = require('puppeteer');

(async () => {
    const url = 'https://www.sqlpac.com/en/documents/html-equations-math-with-mathjax-asciimath.html'
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle2', //networkidle2
        // waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });
    // await page.waitForSelector('.MathJax', {
    //     visible: true,
    //   });
    await page.pdf({ path: `mathjax.pdf`, format: 'a4' });

    await browser.close();
})();