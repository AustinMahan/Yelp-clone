const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', function (req, res, next) {
  const restaurantID = req.params.id;
  const renderObj = {};

  knex('restaurants')
  .select('*')
  .then((restaurants) => {
    var more = false;
    var pages = parseInt(restaurants.length / 9);
    if (restaurants.length % 9 !== 0) {
      more = true;
    }
    renderObj.more = more;
    if (restaurants.length < 9) {
      renderObj.restaurants = restaurants;
    } else {
      renderObj.restaurants = restaurants.slice(0, 9);
    }
    return renderObj;
  }).then(() => {
    res.redirect('/restaurants/page/0');
  });
});

router.get('/page/:id', function (req, res, next) {
  const pageNum = parseInt(req.params.id);
  const renderObj = {};

  knex('restaurants')
  .select('*')
  .then((restaurants) => {
    var more = false;
    var pages = parseInt(restaurants.length / 9);
    if (pages > pageNum) {
      more = true;
    }
    renderObj.title = `Restaurants pg. (${pageNum})`;
    renderObj.more = more;
    renderObj.nextPage = pageNum + 1;
    console.log(renderObj.nextPage);
    renderObj.restaurants = restaurants.slice((9 * pageNum), (9 * (pageNum + 1)));
    res.render('restaurants', renderObj);
  });
});

router.get('/new', function (req, res, next) {
  const renderObj = {};
  res.render('newRest', {});
});

router.get('/:id', function (req, res, next) {
  const restaurantID = req.params.id;
  const renderObj = {};
  knex('restaurants')
  .where('restaurants.id', restaurantID)
  .select('restaurants.name', 'restaurants.location', 'restaurants.description', 'restaurants.type', 'users.username', 'users.first_name', 'users.last_name', 'reviews.rating', 'restaurants.avg_review', 'reviews.review', 'reviews.created_at','reviews.user_id','reviews.restaurant_id', 'reviews.id')
  .join('reviews', 'reviews.restaurant_id', 'restaurants.id')
  .join('users', 'users.id', 'reviews.user_id')
  .then((results) => {
    renderObj.results = results;
    renderObj.title = results[0].name;
    renderObj.restaurantID = restaurantID;
    res.render('restaurant', renderObj);
  })
  .catch((err) => {
    res.redirect('/restaurants');
  });
});

router.get('/:id/reviews', function (req, res, next) {
});

router.get('/:id/edit', function (req, res, next) {
  const restaurantID = req.params.id;
  const renderObj = {};
  knex('restaurants')
  .where('restaurants.id', restaurantID)
  .select('restaurants.name', 'restaurants.location', 'restaurants.description', 'restaurants.type', 'users.username', 'users.first_name', 'users.last_name', 'reviews.rating', 'restaurants.avg_review', 'reviews.review', 'reviews.created_at','reviews.user_id','reviews.restaurant_id')
  .join('reviews', 'reviews.restaurant_id', 'restaurants.id')
  .join('users', 'users.id', 'reviews.user_id')
  .then((results) => {
    renderObj.results = results;
    renderObj.title = results[0].name;
    res.render('restaurant_owner_edit', renderObj);
  })
  .catch((err) => {
    res.redirect('/restaurants');
  });
});

router.delete('/:id/delete', function (req, res, next) {
  const restaurantID = parseInt(req.params.id);
  knex('restaurants')
  .del()
  .where('id', restaurantID)
  .returning('*')
  .then((results) => {
    if (results.length) {
      res.status(200).json({
        status: 'success',
        message: `${results[0].title} is gone!`
      });
      res.redirect('/restaurants')
    } else {
      res.status(404).json({
        status: 'errror',
        message: 'That id does not exist'
      });
      res.redirect('/restaurants')
    }
  })
  .catch((err) => {
    res.status(500).json({
      status: 'errror',
      message: 'Something bad happened!'
    });
    res.redirect('/restaurants')
  });
});


router.get('/:id/review/:revId/edit', function (req, res, next) {
  const renderObj = {};
  const restaurantID = req.params.id;
  const reviewID = req.params.revId;
  knex('reviews')
  .where('reviews.id', reviewID)
  .select('restaurants.name', 'users.first_name', 'users.last_name', 'reviews.rating', 'reviews.review')
  .join('restaurants', 'restaurants.id', 'reviews.restaurant_id')
  .join('users', 'users.id', 'reviews.user_id')
  .then((results) => {
    renderObj.results = results[0];
    renderObj.restaurantID = restaurantID;
    renderObj.reviewID = reviewID;
    console.log(results);
    res.render('review_user_edit', renderObj);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.post('/:id/review/:revId/edit/submit', function (req, res, next) {
  let renderObj = {};
  let restaurantID = req.params.id;
  let reviewID = req.params.revId;
  let updatedReview = req.body.review;
  let updatedRating = req.body.rating;
  knex('reviews')
  .update({
    rating: updatedRating,
    review: updatedReview,
  })
  .where('id', reviewID)
  .returning('*')
  .then((results) => {
    console.log(results);
    if (results.length) {
      res.status(200);
      res.redirect(`/restaurants/${restaurantID}`);
    } else {
      res.status(404).json({
        status: 'error',
        message: 'That id does not exist'
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      message: 'Updated Failed'
    });
  });
});

router.get('/:id/reviews/new', function (req, res, next) {
  let renderObj = {};
  let restaurantID = req.params.id;
  renderObj.restaurantID = restaurantID;
  res.render('review_new', renderObj);
});

router.post('/:id/review/new/submit', function (req, res, next) {
  let renderObj = {};
  let restaurantID = req.params.id;
  let review = req.body.review;
  let rating = req.body.rating;
  console.log(req.body);
  knex('reviews')
  .insert({
    rating: rating,
    review: review
  })
  .returning('*')
  .then((results) => {
    console.log(results);
    if (results.length) {
      res.status(200);
      res.redirect(`/restaurants/${restaurantID}`);
    } else {
      res.status(404).json({
        status: 'error',
        message: 'Error posting review'
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      message: 'Review post Failed'
    });
  });
});

router.post('/new', function (req, res, next) {
  var type = req.body.type;
  var name = req.body.name;
  var streetAddress = req.body.streetAddress;
  var city = req.body.city;
  var url = req.body.url;
  var location = `${req.body.streetAddress}, ${req.body.city}, ${req.body.state}`;
  var description = req.body.description;

  knex('users').where('first_name', req.body.owner_first).then(function(data) {
    if (data.length > 0) {
      knex('restaurants').insert({ name, type, location, description, url }).then(function() {
        knex('restaurants').where('location', location).where('name', name).select('id').then(function(restId) {
          console.log(restId[0].id);
          knex('users').where('id', data[0].id).update('owner_id', restId[0].id).then(function() {
            var emps = [];
            for (var key in req.body) {
              if (key.split('-')[0] === 'first_name') {
                emps.push(key);
              }
            }
            var promise = emps.map(function(key) {
              return knex('employees').insert({first_name: req.body[key], last_name: req.body[`last_name-${key.split('-')[1]}`], role: req.body[`role-${key.split('-')[1]}`], restaurant_id: restId[0].id }).then(function() {

              });
            });
            res.redirect();
            Promise.all(promise).then(function() {
              res.redirect('/');
            });
          });
          res.redirect('/restaurants');
        });
      });
    } else {
      res.send('log in first');
    }
  }).catch(function(err) {
    res.send(err);
  });
});

router.post('/search', function(req, res, next) {
  var searchName = req.body.search.toLowerCase();
  knex('restaurants').where(knex.raw('LOWER("name") LIKE ?', `%${searchName}%`)).then(function(data) {
    if (data.length > 0) {
      res.redirect(`/restaurants/${data[0].id}`);
    }else {
      res.redirect('/restaurants');
    }
  });
});

module.exports = router;
