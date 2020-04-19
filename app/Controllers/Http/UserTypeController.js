/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const UserType = use('App/Models/UserType')

class UserTypeController {
  async index({
    request
  }) {
    const types = await UserType.all()

    return types
  }
}

module.exports = UserTypeController
