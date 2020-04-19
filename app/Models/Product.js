'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  type() {
    return this.belongsTo('App/Models/ProductType')
  }

  orders() {
    return this.hasMany('App/Models/Order')
  }
}

module.exports = Product
