'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddIsFinishedFieldToOrderSchema extends Schema {
  up() {
    this.alter('orders', (table) => {
      table.boolean('is_finished').defaultTo(false)
    })
  }

  down() {
    this.alter('orders', (table) => {
      table.dropColumn('is_finished')
    })
  }
}

module.exports = AddIsFinishedFieldToOrderSchema
