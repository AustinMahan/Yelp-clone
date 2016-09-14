var faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({ first_name: 'Austin', last_name: 'Mahan', username: 'Amahan', owner_id: 1, admin: false }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), username: faker.internet.userName() })
      ]);
    });
};
