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
      renderObj.restaurants = restaurants.slice(0, 9)
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
    renderObj.more = more;
    renderObj.nextPage = pageNum + 1;
    console.log(renderObj.nextPage);
    renderObj.restaurants = restaurants.slice((9 * pageNum), (9 * (pageNum + 1)));
    res.render('restaurants', renderObj);
  })
})

router.get('/new', function (req, res, next) {
  const renderObj = {};
  res.render('newRest', {});
});

router.get('/:id', function (req, res, next) {
  const restaurantID = req.params.id;
  const renderObj = {};
  knex('restaurants')
  .where('restaurants.id', restaurantID)
  .select('restaurants.name', 'restaurants.location', 'restaurants.description', 'restaurants.type', 'users.username', 'users.first_name', 'users.last_name', 'reviews.rating', 'restaurants.avg_review', 'reviews.review', 'reviews.created_at')
  .join('reviews', 'reviews.restaurant_id', 'restaurants.id')
  .join('users', 'users.id', 'reviews.user_id')
  .then((results) => {
    renderObj.results = results;
    console.log(results);
    res.render('restaurant', renderObj);
  })
  .catch((err) => {
    console.log(err);
  });
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
  res.send(req.body);
  var type = req.body.type;
  var name = req.body.name;
  var streetAddress = req.body.streetAddress;
  var city = req.body.city;
  var location = `${req.body.streetAddress}, ${req.body.city}, ${req.body.state}`;
  var description = req.body.description;

  knex('users').where('first_name', req.body.owner_first).then(function(data) {
    if (data.length > 0) {
      knex('restaurants').insert({ name, type, location, description }).then(function() {
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
          }).catch(err => {
            // res.send(err)
          });
          res.redirect('/restaurants');
        }).catch(function(err) {
          // res.send(err)
        });
      }).catch(function(err) {
        // res.send(err);
      });
    } else {
      res.send('log in first');
    }
  }).catch(function(err) {
    // res.send(err)
  });
  // res.redirect('/restaurants')
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
