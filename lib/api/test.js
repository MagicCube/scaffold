const express = require('express');

const router = express.Router();
router.get('/hello', (req, res) => {
  res.send({
    message: `Hello, ${req.query.name}!`
  });
});

module.exports = router;
