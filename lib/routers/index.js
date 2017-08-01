const express = require('express');

const api = require('../api');

const DEV_MODE = (process.env.NODE_ENV === 'development');

const router = express.Router();

router.use('/api', api);

router.get('/', (req, res) => {
  res.render('index', {
    DEV_MODE
  });
});

module.exports = router;
