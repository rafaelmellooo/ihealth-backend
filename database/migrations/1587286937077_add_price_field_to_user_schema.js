'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddPriceFieldToUserSchema extends Schema {
  up() {
    this.alter('users', (table) => {
      table.decimal('price')
    })
  }

  down() {
    this.alter('users', (table) => {
      table.dropColumn('price')
    })
  }
}

module.exports = AddPriceFieldToUserSchema
