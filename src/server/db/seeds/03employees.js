var faker = require('faker')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)}),
        knex('employees').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), role: faker.name.jobTitle(), restaurant_id: Math.ceil(Math.random() * 12)})
      ]);
    });
};
