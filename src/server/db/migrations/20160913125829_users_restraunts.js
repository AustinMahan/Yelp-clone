
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_restraunts', function(table) {
    table.integer('user_id');
    table.integer('restaurant_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_restraunts');
};
