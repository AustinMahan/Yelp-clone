var faker = require('faker');
var types = ['Mexican', 'American', 'Italian', 'Chinese'];


exports.seed = function(knex, Promise) {

  return knex('restaurants').select('id').orderBy('id').then((data) => {
    console.log(data);
    var promise = data.map(function (curId) {
      return knex('restaurants').where('id', curId.id).update('avg_review', knex('reviews').avg('rating').where('restaurant_id', curId.id))
    })

    return Promise.all(promise);
  })
};
