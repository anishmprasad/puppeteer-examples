/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable spaced-comment */
// import puppeteer from "puppeteer";
const puppeteer = require('puppeteer');

const generatePDF = async () => {
  // const url = 'https://www.sqlpac.com/en/documents/html-equations-math-with-mathjax-asciimath.html'
//   const url = '../../template/mathjax/index.html';
  const url = '../../template/assignpreview/build/index.html';
    
  // const url = 'https://news.google.com'
  const browser = await puppeteer.launch({
      // headless : true,
    //   devtools: true
  });
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}${url}`,
  {
      waitUntil: 'networkidle2', //networkidle2
      // waitUntil: 'load',
      // Remove the timeout
      timeout: 0
  });

  // await page.goto(url, {
  //     waitUntil: 'networkidle2', //networkidle2
  //     // waitUntil: 'load',
  //     // Remove the timeout
  //     timeout: 0
  // });

  await page.waitForSelector('.domReady', {
      visible: true,
  });

  // await page.waitFor(5000);

  // await page.waitForNavigation({
  //     waitUntil: 'networkidle0',
  //   });

  const pdfBuffer = await page.pdf({ path: `mathjax ${new Date()}.pdf`, format: 'a4' });

  // await page.pdf({
  //     path: outputFileName,
  //     displayHeaderFooter: true,
  //     headerTemplate: '',
  //     footerTemplate: '',
  //     printBackground: true,
  //     format: 'A4',
  //   });

  await page.close();
  await browser.close();

  return pdfBuffer;
};

module.exports = generatePDF;
