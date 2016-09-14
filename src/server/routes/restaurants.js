const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const renderObj = {};
});

router.get('/new', function (req, res, next) {
  const renderObj = {};
  res.render('newRest', {});
});

router.get('/:id', function (req, res, next) {
  const renderObj = {};
  res.render('restaurant',renderObj);
});

router.get('/:id/reviews', function (req, res, next) {
  const renderObj = {};
  
});

router.get('/:id/edit', function (req, res, next) {
  const renderObj = {};

});

router.get('/:id/review/:revId/edit', function (req, res, next) {
  const renderObj = {};

});

router.get('/:id/reviews/new', function (req, res, next) {
  const renderObj = {};

});

router.post('/new', function (req, res, next) {
  res.send(req.body)
  var type = req.body.type
  var name = req.body.name
  var streetAddress = req.body.streetAddress
  var city = req.body.city
  var location = `${req.body.streetAddress}, ${req.body.city}, ${req.body.state}`
});

module.exports = router;
