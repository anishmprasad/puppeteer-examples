const express = require('express');

const emojis = require('./emojis');
const pdf = require('./pdf');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/pdf', pdf);

module.exports = router;
