/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductSeeder {
  async run() {
    await Factory.model('App/Models/Product').createMany(40)
  }
}

module.exports = ProductSeeder
