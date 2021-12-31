exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.float("price").notNullable();
    table.integer("comission").notNullable();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
