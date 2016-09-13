
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('Users').insert({first_name: 'Austin', last_name: 'Mahan', username: 'Amahan', owner_id: 1, admin: false })
      ]);
    });
};
