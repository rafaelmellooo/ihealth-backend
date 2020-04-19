/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Product = use('App/Models/Product')

class SearchController {
  async index({
    request
  }) {
    const {
      types,
      query,
      page = 1
    } = request.get()

    const products = types ? (Product
      .query()
      .whereIn('type_id', Array.from(types))) : (Product
      .query()
    )

    return query ? (products
      .andWhere('name', 'like', '%' + query + '%')
      .paginate(page, 10)) : (products.paginate(page, 10))
  }
}

module.exports = SearchController
