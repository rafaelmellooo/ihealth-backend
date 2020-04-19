const Delivery = use('App/Models/Delivery')

class DeliveryController {
  

  async store({
    request,
    response
  }) {
    const user = await auth.getUser()
    
    const order_id = request.only(['order_id'])

    const delivery = await Delivery.create({
      user_id: user,
      order_id: order_id
    })

    return response.status(201).json(delivery)
  }

  async show({
    params,
    request,
    response,
    view
  }) {}
}

module.exports = DeliveryController
