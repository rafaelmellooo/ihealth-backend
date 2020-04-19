/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserType = use('App/Models/UserType')

class UserTypeSeeder {
  async run() {
    await UserType.createMany([{
      name: 'Comprador'
    }, {
      name: 'Vendedor'
    }, {
      name: 'Entregador'
    }])
  }
}

module.exports = UserTypeSeeder
