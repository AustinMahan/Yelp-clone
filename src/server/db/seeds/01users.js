var faker = require('faker');
var bcrypt = require('bcrypt');
var hashedPass = bcrypt.hashSync('password', 10);

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({ first_name: 'Austin', last_name: 'Mahan', password: hashedPass, username: 'Amahan', owner_id: 1, admin: false }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() }),
        knex('users').insert({ first_name: faker.name.firstName(), last_name: faker.name.lastName(), password: hashedPass, username: faker.internet.userName() })
      ]);
    });
};
