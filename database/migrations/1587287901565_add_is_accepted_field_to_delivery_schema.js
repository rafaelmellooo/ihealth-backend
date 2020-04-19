'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddIsAcceptedFieldToDeliverySchema extends Schema {
  up() {
    this.alter('deliveries', (table) => {
      table.boolean('is_accepted')
    })
  }

  down() {
    this.alter('deliveries', (table) => {
      table.dropColumn('is_accepted')
    })
  }
}

module.exports = AddIsAcceptedFieldToDeliverySchema
