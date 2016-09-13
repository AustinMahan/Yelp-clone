
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Reviews', function (table) {
    table.increments();
    table.float('rating');
    table.string('review', [500]);
    table.integer('restaurant_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Reviews')
};
