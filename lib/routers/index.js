const express = require('express');

const api = require('../api');
const pages = require('./pages');

const router = express.Router();

router.use(pages);
router.use('/api', api);

module.exports = router;
