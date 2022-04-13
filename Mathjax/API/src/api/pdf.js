/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable indent */

const express = require('express');
const generatePDF = require('./generatePDF')

const router = express.Router();

router.get('/', async (req, res) => {
    const pdf = await generatePDF();
    res.set("Content-Type", "application/pdf");
    // res.set("Content-Type", "application/octet-stream");
    // res.set("Content-Disposition", `attachment;`);

    res.send(pdf);
});

module.exports = router;
