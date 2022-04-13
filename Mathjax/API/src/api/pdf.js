/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable indent */

const express = require('express');
const generatePDF = require('./generatePDF')

const router = express.Router();

router.get('/', async (req, res) => {
    const pdf = await generatePDF(`
      <html>
        <head>
          <title>Test PDF</title>
        </head>
        <body>
           // The contents of our PDF will go here...
        </body>
      </html>
    `);
    res.set("Content-Type", "application/pdf");
    res.send(pdf);
});

module.exports = router;
