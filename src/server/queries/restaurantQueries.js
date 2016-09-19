const knex = require('../db/knex')

function postNewRest(req, type, name, streetAddress, city, url, location, description, callback) {
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
              callback(null, '/')
            });
          });
        });
      });
    } else {
      callback('Log in first');
    }
  }).catch(function(err) {
    callback(err);
  });
}

function newReview(restaurantID, review, rating, user_id, callback) {
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
        callback(null, `/restaurants/${restaurantID}`)
      });
    } else {
      callback('Error posting review')
    }
  })
  .catch((err) => {
    callback(err)
  });
}

function getNewReview (req, callback) {
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
      callback(null, {page: 'review_new', render: renderObj})
    });
  }
  else if (adminRights) {
    let restaurantID = req.params.id;
    knex('restaurants')
    .where('restaurants.id', restaurantID)
    .then((results) => {
      renderObj.results = results[0];
      renderObj.restaurantID = restaurantID;
      callback(null, {page: 'review_new', render: renderObj})
    });
  }
  else {
    callback(`/restaurants/${restaurantID}`)
  }
}

function getOne (req, callback) {
  const restaurantID = req.params.id;
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
        callback(null, {page: 'restaurant', render: renderObj})
      })

      // check if user wrote review
      if (renderObj.user) {
        knex('reviews')
        .where('user_id', renderObj.user.id)
        .then((loggedin) => {
          renderObj.reviewWritten = true;
        });
      }
    })
  })
  .catch((err) => {
    callback('/restaurants')
  });
}

function submitReview(req, callback) {
  const { renderObj } = req;
  let restaurantID = req.params.id;
  let reviewID = req.params.revId;
  let updatedReview = req.body.review;
  let updatedRating = req.body.rating;
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
        callback(null, `/restaurants/${restaurantID}`)
      });
    } else {
      callback('That review id does not exist')
    }
  })
  .catch((err) => {
    callback(err)
  });
}

module.exports = {
  postNewRest, newReview, getNewReview, getOne, submitReview
}
