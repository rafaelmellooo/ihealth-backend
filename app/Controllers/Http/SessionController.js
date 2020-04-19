const User = use('App/Models/User')
class SessionController {
  async store({
    auth,
    request
  }) {
    const {
      email,
      password
    } = request.only(['email', 'password'])

    const {
      token
    } = await auth.attempt(email, password)

    const {
      type_id,
      name
    } = await User.findBy('email', email)

    return {
      token,
      type_id,
      name
    };
  }
}

module.exports = SessionController
