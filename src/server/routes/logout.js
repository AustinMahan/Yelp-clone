const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  console.log('first');
  console.log('second');
  req.session = null;
  res.redirect('/');
});

module.exports = router;
