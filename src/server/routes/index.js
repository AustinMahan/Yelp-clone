const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  var { renderObject } = req;
  renderObject.title = 'gRestaurants';
  knex('restaurants').select()
  .orderBy('avg_review', 'desc')
  .limit(3)
  .then((results) => {
    renderObject.restaurants = results;
    res.render('index', renderObject);
  })
  .catch((err) => {
    return next(err);
  });
});

module.exports = router;
