var faker = require('faker');
var minRest;
var maxRest;

exports.seed = function(knex, Promise) {
  var promise = [Promise.resolve(knex('restaurants').min('id')), Promise.resolve(knex('restaurants').max('id')), Promise.resolve(knex('users').min('id')), Promise.resolve(knex('users').max('id'))];

  return Promise.all(promise).then((data) => {
    // maxRest = parseInt(knex('restaurants').max('id'));
    console.log(data);
    var min = data[0][0].min;
    var max = data[1][0].max;
    var userMin = data[2][0].min;
    var userMax = data[3][0].max;
    // Deletes ALL existing entries
    return knex('reviews').del()
      .then(function () {
        return Promise.all([
          // Inserts seed entries
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          }),
          knex('reviews').insert({
            rating: (Math.random() * 4) + 1,
            review: faker.lorem.paragraph(),
            restaurant_id: Math.floor(Math.random() * (max - min + 1)) + min,
            user_id: Math.floor(Math.random() * (userMax - userMin + 1)) + userMin
          })
        ]);
      });
  });
};
