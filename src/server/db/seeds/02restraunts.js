var faker = require('faker');
var types = ['Mexican', 'American', 'Italian', 'Chinese'];
var i = 0
function changeI() {
  types.splice(i, 1)
  i = Math.floor(Math.random() * types.length)
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('restaurants').insert({name: 'qDoba', type: 'Mexican', description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i],
        description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()}),
        changeI(),
        knex('restaurants').insert({name: faker.company.companyName(), type: types[i], description: faker.lorem.paragraph(), location: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`, url: faker.image.food()})
      ]);
    });
};
