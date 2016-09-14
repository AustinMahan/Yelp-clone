const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Welcome to Express!';
  knex('users').where('id', 10).then(function (data) {
    res.send(data);
  });
});

module.exports = router;
