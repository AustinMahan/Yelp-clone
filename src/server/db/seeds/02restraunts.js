var faker = require('faker');
var types = ['Mexican', 'American', 'Italian', 'Chinese'];
var i = 0
function changeI() {
  i = Math.floor(Math.random() * 4)
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({name: 'qDoba', type: 'Mexican', description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 1))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i],
        description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 2))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 3))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 4))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 5))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 6))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 7))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 8))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 9))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 10))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 11))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 12))}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food(), avg_review: (knex('reviews').avg('rating').where('restaurant_id', 13))})
      ]);
    });
};
