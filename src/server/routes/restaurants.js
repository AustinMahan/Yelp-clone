const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const renderObj = {};
});

router.get('/new', function (req, res, next) {
  const renderObj = {};
  res.render('newRest');
});

router.get('/:id', function (req, res, next) {
  const restaurantID = req.params.id;
  const renderObj = {};
  knex('restaurants').where({
    id: restaurantID
  }).then((restaurant) => {
    renderObj.restaurant = restaurant;
    return renderObj;
  }).then(() => {
    res.render('restaurant', renderObj);
    console.log(renderObj.restaurant[0]);
  });



});

router.get('/:id/reviews', function (req, res, next) {
  const renderObj = {};
  // test comment
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

});

module.exports = router;
