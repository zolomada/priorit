/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("quarters", (table) => {
      table.increments("id").primary();
      table.integer("quarter_number").notNullable();
      table.integer("year").notNullable();
      table.unique(["quarter_number", "year"]);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })

    .createTable("goals", (table) => {
      table.increments("id").primary();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("quarter_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("quarters")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.enu("goal_type", ["Major", "Minor"]).notNullable();
      table.string("description").notNullable();
      table.boolean("completion_status").defaultTo(false);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("quarters").dropTable("goals");
};
