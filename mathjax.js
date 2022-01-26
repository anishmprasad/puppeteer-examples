const puppeteer = require('puppeteer');

(async () => {
    const url = 'https://www.sqlpac.com/en/documents/html-equations-math-with-mathjax-asciimath.html'
    // const url = 'https://news.google.com'
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

    // await page.waitForNavigation({
    //     waitUntil: 'networkidle0',
    //   });

    await page.pdf({ path: `mathjax1.pdf`, format: 'a4' });

    // await page.pdf({
    //     path: outputFileName,
    //     displayHeaderFooter: true,
    //     headerTemplate: '',
    //     footerTemplate: '',
    //     printBackground: true,
    //     format: 'A4',
    //   });

    await browser.close();
})();