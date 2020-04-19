/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Delivery = use('App/Models/Delivery')

class RefuseController {
  async store({
    params,
    response,
    auth
  }) {
    const user = await auth.getUser()
    const {
      delivery_id
    } = params

    const delivery = await Delivery.findByOrFail('id', delivery_id)

    if (delivery.user_id !== user.id) {
      return response.status(401).json({
        error: 'Permission Denied'
      })
    }

    delivery.is_accepted = false

    await delivery.save()

    return response.status(201).json()
  }
}

module.exports = RefuseController
