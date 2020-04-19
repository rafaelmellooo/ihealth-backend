'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddQuantityToOrderSchema extends Schema {
  up () {
    this.alter('orders', (table) => {
      table.integer('quantity')
    })
  }

  down () {
    this.alter('orders', (table) => {
      table.integer('quantity')
    })
  }
}

module.exports = AddQuantityToOrderSchema
