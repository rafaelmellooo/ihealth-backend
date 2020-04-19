/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

class UserController {

  async index({
    request
  }) {
    const users = await User.all();

    return users; 
  }

  async store({
    request,
    response
  }) {
    const {
      name,
      email,
      password,
      description,
      address,
      type_id
    } = request.only(['name', 'email', 'password', 'description', 'address', 'type_id'])

    if (!type_id) {
      return response.status(400).json({
        error: 'Type of user needs to be informed'
      })
    }

    const user = await User.create({
      name,
      email,
      password,
      description,
      address,
      type_id
    })

    return response.status(201).json(user)
  }
}

module.exports = UserController
