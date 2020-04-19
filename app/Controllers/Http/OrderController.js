/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Order = use('App/Models/Order')

class OrderController {
  async index({
    params,
    auth,
    response
  }) {
    const user = await auth.getUser()

    console.log(user)

    if (Number(params.user_id) !== user.id) {
      return response.status(401).json({
        error: 'Permission Denied'
      })
    }

    const orders = await Order
      .query().where('user_id', params.user_id).with('product').fetch()

    return orders
  }

  async store({
    auth,
    params,
    response
  }) {
    const user = await auth.getUser()

    const order = await Order.create({
      user_id: user.id,
      product_id: params.product_id
    })

    return response.status(201).json(order)
  }
}

module.exports = OrderController
