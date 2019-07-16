
exports.up = function (knex) {
    return knex.schema.createTable('cars', table => {
        table.increments();
        table.text('vin', 128).unique().notNullable();
        table.text('make', 128).notNullable();
        table.text('model', 128).notNullable();
        table.decimal('mileage').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now())
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
