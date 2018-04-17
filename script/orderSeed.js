/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {Order} = require('../server/db/models')
const test = require('../server/db/models')

async function seed () {
  await db.sync()
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  console.log(test);
  console.log('Order: ', Order)

  const orders = await Promise.all([
    Order.create({
      shipped: '2018-04-17 15:06:19',
      arrived: '2018-04-20 15:06:19'
    }),
    Order.create({
      shipped: '2018-04-20 17:53:19',
      arrived: '2018-04-27 19:01:27'
    }),
    Order.create({
      shipped: '2018-04-27 19:01:17',
      arrived: '2018-04-28 12:56:11'
    }),
    Order.create({
      shipped: '2018-04-18 15:06:19',
      arrived: '2018-04-20 15:06:19'
    }),
    Order.create({
      shipped: '2018-04-18 15:06:19',
      arrived: '2018-04-20 23:01:40'
    }),
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')