'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.text('description').notNullable()
      table.decimal('price').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('type_id').unsigned().references('id').inTable('product_types')

      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
