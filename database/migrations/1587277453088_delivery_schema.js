'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeliverySchema extends Schema {
  up() {
    this.create('deliveries', (table) => {
      table.increments()

      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('order_id').unsigned().references('id').inTable('orders')

      table.timestamps()
    })
  }

  down() {
    this.drop('deliveries')
  }
}

module.exports = DeliverySchema
