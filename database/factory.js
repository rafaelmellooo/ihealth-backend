'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    name: faker.name(),
    email: faker.email(),
    password: '0123456789',
    type_id: faker.integer({
      min: 1,
      max: 3
    })
  }
})

Factory.blueprint('App/Models/ProductType', (faker) => {
  return {
    name: faker.string()
  }
})

Factory.blueprint('App/Models/Product', (faker) => {
  return {
    name: faker.string(),
    description: faker.paragraph(),
    price: faker.floating({
      min: 0,
      max: 100
    }),
    type_id: faker.integer({
      min: 1,
      max: 5
    }),
    user_id: faker.integer({
      min: 1,
      max: 10
    })
  }
})

Factory.blueprint('App/Models/Order', (faker) => {
  return {
    user_id: faker.integer({
      min: 1,
      max: 10,
    }),

    product_id: faker.integer({
      min: 1,
      max: 40
    })
  }
})

Factory.blueprint('App/Models/Delivery', (faker) => {
  return {
    user_id: faker.integer({
      min: 1,
      max: 10
    }),

    order_id: faker.integer({
      min: 1,
      max: 20
    })
  }
})
