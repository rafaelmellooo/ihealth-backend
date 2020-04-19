/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Product = use('App/Models/Product')

class ProductController {
  async store({
    auth,
    request,
    response
  }) {
    const {
      name,
      description,
      price
    } = request.only(['name', 'description', 'price'])

    const user = await auth.getUser()

    if (user.type_id !== 2) {
      return response.status(401).json({
        error: 'Permission Denied'
      })
    }

    const product = await Product.create({
      name,
      description,
      price,
      user_id: user.id
    })

    return response.status(201).json(product)
  }

  async show({
    params,
    request
  }) {
    const product = await Product.findByOrFail('id', params.id)

    return product;
  }
}

module.exports = ProductController
