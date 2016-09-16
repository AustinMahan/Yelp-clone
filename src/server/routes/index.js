const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  var { renderObj } = req;
  renderObj.title = 'gRestaurants';
  knex('restaurants').select()
  .orderBy('avg_review', 'desc')
  .limit(3)
  .then((results) => {
    renderObj.restaurants = results;
    res.render('index', renderObj);
  })
  .catch((err) => {
    return next(err);
  });
});

module.exports = router;
