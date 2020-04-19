/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const ProductType = use('App/Models/ProductType')

class ProductTypeController {
  async index({
    request
  }) {
    const types = await ProductType.all()

    return types;
  }
}

module.exports = ProductTypeController
