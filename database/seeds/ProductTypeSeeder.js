/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductTypeSeeder {
  async run() {
    await Factory.model('App/Models/ProductType').createMany(5)
  }
}

module.exports = ProductTypeSeeder
