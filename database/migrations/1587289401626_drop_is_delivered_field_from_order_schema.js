'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropIsDeliveredFieldFromOrderSchema extends Schema {
  up() {
    this.alter('orders', (table) => {
      table.dropColumn('is_delivered')
    })
  }

  down() {
    this.alter('orders', (table) => {
      table.boolean('is_delivered').defaultTo(false)
    })
  }
}

module.exports = DropIsDeliveredFieldFromOrderSchema
