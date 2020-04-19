/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DeliverySeeder {
  async run() {
    await Factory.model('App/Models/Delivery').createMany(30)
  }
}

module.exports = DeliverySeeder
