/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class OrderSeeder {
  async run() {
    await Factory.model('App/Models/Order').createMany(20)
  }
}

module.exports = OrderSeeder
