
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('role');
    table.integer('restaurant_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
