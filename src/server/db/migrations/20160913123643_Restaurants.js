
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Restaurants', function (table) {
    table.increments();
    table.string('name');
    table.string('type');
    table.string('description', [500]);
    table.string('location');
    table.float('avgReview');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Restaurants')
};
