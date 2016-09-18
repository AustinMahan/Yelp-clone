const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const restaurantsControllers = require('../controllers/restaurants');
const verifyUserExists = restaurantsControllers.verifyUserExists;


router.get('/', function (req, res, next) {
  const restaurantID = req.params.id;

  res.redirect('/restaurants/page/0');
});

router.get('/page/:id', function (req, res, next) {
  const pageNum = parseInt(req.params.id);
  const { renderObj } = req;

  knex('restaurants')
  .select('*')
  .then((restaurants) => {
    var more = false;
    var pages = parseInt(restaurants.length / 9);
    var pageArr = [];

    for (var i = 0; i <= pages; i++) {
      pageArr.push(i + 1);
    }

    renderObj.title = `gRestaurants Page: ${pageNum + 1}`;
    renderObj.nextPage = pageNum + 1;
    renderObj.prevPage = pageNum - 1;
    renderObj.allPages = pageArr;
    renderObj.restaurants = restaurants.slice((9 * pageNum), (9 * (pageNum + 1)));

    if (pageNum === 0) {
      renderObj.next = true;
    } else if (pageNum < pages) {
      renderObj.next = true;
      renderObj.prev = true;
    } else {
      renderObj.prev = true;
    }
    res.render('restaurants', renderObj);
  });
});

router.get('/new', function (req, res, next) {
  const { renderObj } = req;
  res.render('newRest', renderObj);
});

router.get('/:id', function (req, res, next) {
  // console.log(req.session.user);
  const restaurantID = req.params.id;
  console.log(req.session.us);
  const { renderObj } = req;
  knex('restaurants')
  .where('restaurants.id', restaurantID)
  .then((restraurant) => {
    renderObj.title = restraurant[0].name;
    renderObj.restraurant = restraurant[0];
    return knex('reviews')
    .where('restaurant_id', restaurantID)
    .select('reviews.id AS review_id', '*')
    .join('users', 'users.id', 'reviews.user_id').then((reviews) => {
      renderObj.reviews = reviews
      renderObj.restaurantID = restaurantID;
      knex('reviews').avg('rating').where('restaurant_id', restaurantID).then((data) => {
        renderObj.restraurant.avg_review = data[0].avg
        res.render('restaurant', renderObj);
      })

      // check if user wrote review
      if (renderObj.user) {
        knex('reviews')
        .where('user_id', renderObj.user.id)
        .then((loggedin) => {
          renderObj.reviewWritten = true;
          console.log(renderObj.reviewWritten);
        });
      }
    })
  })
  .catch((err) => {
    console.log(err);
    res.redirect('/restaurants');
  });
});

router.get('/:id/reviews', function (req, res, next) {

});

router.get('/:id/edit', verifyUserExists, function (req, res, next) {
  const { renderObj } = req;
  const restaurantID = req.params.id;
  var ownerID = renderObj.user.ownerID;
  var adminRights = renderObj.user.admin;
  if (restaurantID === ownerID || adminRights) {
    knex('restaurants')
    .where('restaurants.id', restaurantID)
    .select('restaurants.name', 'restaurants.location', 'restaurants.description', 'restaurants.type','restaurants.url', 'users.username', 'users.first_name', 'users.last_name', 'reviews.rating', 'restaurants.avg_review', 'reviews.review', 'reviews.created_at','reviews.user_id','reviews.restaurant_id')
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
  }else {
    res.redirect('/restaurants');
  }
});

router.delete('/:id/delete', verifyUserExists, function (req, res, next) {
  const restaurantID = parseInt(req.params.id);
  var ownerID = renderObj.user.ownerID;
  var adminRights = renderObj.user.admin;

  if (restaurantID === ownerID || adminRights) {
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
  }
  else {
    res.redirect('/restaurants')
  }
});

router.put('/:id/edit', (req, res, next) => {
  const { renderObj } = req;
  const id = parseInt(req.params.id);
  const updatedrestaurantName = req.body.name;
  const updatedRestaurantIMG = req.body.url;
  const updatedLocation = req.body.location;
  const updatedCuisineType = req.body.type;
  const updatedRestaurantDescription = req.body.description;

  knex('restaurants')
  .update({
    name: updatedrestaurantName,
    url: updatedRestaurantIMG,
    location: updatedLocation,
    type: updatedCuisineType,
    description: updatedRestaurantDescription
  })
  .where('id', id)
  .returning('*')
  .then((results) => {
    if (results.length) {
      res.status(200).json({
        status: 'success',
        message: `${results[0].name} has been updated!`
      });
    } else {
      res.status(404).json({
        status: 'errror',
        message: 'That id does not exist'
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      status: 'errror',
      message: 'Something bad happened!'
    });
  });
});

router.get('/:id/review/:revId/edit', function (req, res, next) {
  const { renderObj } = req;
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
    res.render('review_user_edit', renderObj);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.post('/:id/review/:revId/edit/submit', function (req, res, next) {
  const { renderObj } = req;
  let restaurantID = req.params.id;
  let reviewID = req.params.revId;
  let updatedReview = req.body.review;
  let updatedRating = req.body.rating;
  console.log(req.body);
  knex('reviews')
  .update({
    rating: updatedRating,
    review: updatedReview
  })
  .where('id', reviewID)
  .returning('*')
  .then((results) => {
    if (results.length) {
      knex('restaurants').where('id', restaurantID).update('avg_review', knex('reviews').avg('rating').where('restaurant_id', restaurantID)).then(() => {
        res.status(200);
        res.redirect(`/restaurants/${restaurantID}`);
      });
    } else {
      res.status(404).json({
        status: 'error',
        message: 'That review id does not exist'
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

router.get('/:id/review/:revId/delete', function (req, res, next) {
  let restaurantID = req.params.id;
  let reviewID = req.params.revId;
  let updatedReview = req.body.review;
  let updatedRating = req.body.rating;
  console.log('delete w');
  knex('reviews')
  .where('id', reviewID)
  .del()
  .then((results) => {
    if (!results.length) {
      res.status(200);
      res.redirect(`/restaurants/${restaurantID}`);
    } else {
      res.status(404).json({
        status: 'error',
        message: 'That review id does not exist'
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      message: 'Delete Failed'
    });
  });
});

router.get('/:id/reviews/new', verifyUserExists, function (req, res, next) {
  const { renderObj } = req;
  var ownerID = renderObj.user.owner_id;
  var adminRights = renderObj.user.admin;
  if (ownerID === null) {
    let restaurantID = req.params.id;
    knex('restaurants')
    .where('restaurants.id', restaurantID)
    .select('restaurants.name')
    .then((results) => {
      renderObj.title = results[0].name + " New Review";
      renderObj.results = results[0];
      renderObj.restaurantID = restaurantID;
    res.render('review_new', renderObj);
    });
  }
  else if (adminRights) {
    let restaurantID = req.params.id;
    knex('restaurants')
    .where('restaurants.id', restaurantID)
    .then((results) => {
      renderObj.results = results[0];
      renderObj.restaurantID = restaurantID;
    res.render('review_new', renderObj);
    });
  }
  else {
    res.redirect(`/restaurants/${restaurantID}`);
  }
});

router.post('/:id/review/new/submit', function (req, res, next) {
  const { renderObj } = req;
  let restaurantID = req.params.id;
  let review = req.body.review;
  let rating = req.body.rating;
  let user_id = renderObj.user.id;
  knex('reviews')
  .insert({
    user_id: user_id,
    rating: rating,
    review: review,
    restaurant_id: restaurantID
  })
  .returning('*')
  .then((results) => {
    if (results.length) {
      knex('restaurants').where('id', restaurantID).update('avg_review', knex('reviews').avg('rating').where('restaurant_id', restaurantID)).then(() => {
        res.status(200);
        res.redirect(`/restaurants/${restaurantID}`);
      });
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
  const { renderObj } = req;
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
            Promise.all(promise).then(function() {
              res.redirect('/');
            });
          });
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
  var { renderObj } = req;
  var searchName = req.body.search.toLowerCase();
  if (searchName.length == 0) {
    res.redirect('/restaurants');
  }else {
    knex('restaurants').where(knex.raw('LOWER("name") LIKE ?', `%${searchName}%`)).limit(9).then(function(data) {
      if (data.length > 0) {
        renderObj.restaurants = data
        res.render(`restaurants`, renderObj);
      } else {
        res.redirect('/restaurants');
      }
    });
  }
});

module.exports = router;
