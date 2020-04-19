'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', (table) => {
      table.increments()
      table.boolean('is_delivered').defaultTo(false)
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('product_id').unsigned().references('id').inTable('products')
      table.timestamps()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
