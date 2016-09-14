
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function (table) {
    table.increments();
    table.string('name');
    table.string('type');
    table.string('description', [500]);
    table.string('location');
    table.float('avg_review');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants')
};
