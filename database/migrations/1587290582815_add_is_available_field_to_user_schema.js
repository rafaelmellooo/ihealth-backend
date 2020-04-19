  'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddIsAvailableFieldToUserSchema extends Schema {
  up() {
    this.alter('users', (table) => {
      table.boolean('is_available').defaultTo(true)
    })
  }

  down() {
    this.alter('users', (table) => {
      table.dropColumn('is_available')
    })
  }
}

module.exports = AddIsAvailableFieldToUserSchema
