var faker = require('faker');
var types = ['Mexican', 'American', 'Italian', 'Chinese'];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({name: 'qDoba', type: 'Mexican', description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 1))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 2))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 3))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 4))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 5))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 6))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 7))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 1))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 8))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 9))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 10))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 11))}),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[Math.floor(Math.random() * 4)], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 12))})
      ]);
    });
};
