const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt')

router.get('/', function (req, res, next) {
  const renderObj = {};
  res.render('signupForm')
});

router.get('/err', function (req, res, next) {
  const renderObj = {};
  renderObj.err = true;
  res.render('signupForm', renderObj)
})

router.post('/', function (req, res, next) {
  var password = bcrypt.hashSync(req.body.password, 10)
  knex('users').where('username', req.body.username).then((data) => {
    if(data.length > 0) {
      res.redirect('/signup/err')
    }else {
      knex('users').insert({first_name: req.body.first_name, last_name: req.body.last_name, username: req.body.username, password: password }).then(() => {
        res.redirect('restaurants')
      })
    }
  })
});

module.exports = router;
