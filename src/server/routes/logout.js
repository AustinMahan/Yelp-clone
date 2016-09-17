const express = require('express');
const router = express.Router();

router.get('/logout', function (req, res, next) {
  console.log('first');
  res.redirect('/');
  console.log('second');
  renderObj.user = 'null';
});

module.exports = router;
