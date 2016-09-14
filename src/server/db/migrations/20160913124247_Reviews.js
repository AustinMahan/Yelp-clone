
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', function (table) {
    table.increments();
    table.float('rating');
    table.string('review', [500]);
    table.integer('restaurant_id');
    table.integer('user_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')
};
