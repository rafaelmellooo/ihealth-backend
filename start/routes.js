'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/users', 'UserController.index')
Route.post('/users', 'UserController.store')

Route.post('/sessions', 'SessionController.store')

Route.group(() => {
  Route.get('/products/:id', 'ProductController.show')
  Route.post('/products', 'ProductController.store')

  Route.get('/users/:user_id/orders', 'OrderController.index')
  Route.post('/products/:product_id/orders', 'OrderController.store')

  Route.post('/orders/:order_id/deliveries', 'DeliveryController.store')
  Route.get('/users/:user_id/deliveries', 'DeliveryController.index')

  Route.post('/deliveries/:delivery_id/accept', 'AcceptController.store')
  Route.post('/deliveries/:delivery_id/refuse', 'RefuseController.store')

  Route.get('/search', 'SearchController.index')
}).middleware('auth')

Route.get('/user_types', 'UserTypeController.index')
Route.get('/product_types', 'ProductTypeController.index')
