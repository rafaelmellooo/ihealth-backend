/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Order = use('App/Models/Order')

class OrderController {
  async index({
    params,
    auth,
    response
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

    const orders = await Order
      .query()
      .leftJoin('deliveries', 'orders.id', 'deliveries.order_id')
      .where('orders.user_id', user_id)
      .andWhere(builder => {
        builder.where('deliveries.is_accepted', false)
        builder.orWhereNull('deliveries.is_accepted')
      })
      .with('product')
      .fetch()

    return orders
  }

  async store({
    auth,
    params,
    response,
    request
  }) {
    const user = await auth.getUser()

    const {
      quantity
    } = request.only(['quantity'])

    const order = await Order.create({
      user_id: user.id,
      product_id: params.product_id,
      quantity
    })

    return response.status(201).json(order)
  }
}

module.exports = OrderController
