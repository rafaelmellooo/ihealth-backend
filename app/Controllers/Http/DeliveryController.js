/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Delivery = use('App/Models/Delivery')

class DeliveryController {
  async index({
    auth,
    response,
    params
  }) {
    const user = await auth.getUser()

    const {
      user_id
    } = params

    if (Number(user_id) !== user.id) {
      return response.status(401).json({
        error: 'Permission Denied'
      })
    }

    const deliveries = await Delivery
      .query()
      .whereNull('is_accepted')
      .andWhere('user_id', user_id)
      .with('order.product')
      .fetch()

    return deliveries
  }

  async store({
    params,
    request,
    response
  }) {
    const {
      user_id
    } = request.only(['user_id'])
    const order_id = params.order_id

    await Delivery.create({
      user_id,
      order_id
    })

    return response.status(201).json()
  }
}

module.exports = DeliveryController
