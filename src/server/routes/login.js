const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');

router.get('/', function (req, res, next) {
  const renderObj = {};
  res.render('login', renderObj);
});

router.get('/logErr', function (req, res, next) {
  const renderObj = {};
  renderObj.err = true;
  res.render('login', renderObj);
});

router.post('/', function (req, res, next) {
  knex('users').where('username', req.body.username).then((data) => {
    if (data.length > 0) {
      if (bcrypt.compareSync(req.body.password, data.password)) {
        req.session.user = data[0];
        res.redirect('/restaurants');
      }else {
        res.redirect('/login/logErr');
      }
    }else {
      res.redirect('/login/logErr');
    }
  });
});

module.exports = router;
