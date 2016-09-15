
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function (table) {
    table.increments();
    table.string('name');
    table.string('url');
    table.string('type');
    table.string('description', [500]);
    table.string('location');
    table.float('avg_review').defaultTo(0.00)
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants');
};
