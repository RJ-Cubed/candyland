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
const {Review} = require('../server/db/models')

async function seed () {
  await db.sync()
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const reviews = await Promise.all([
    Review.create({
      title: 'Best Ever',
      content: 'Best chocolate strawberries EVER! Tried other well known brand, but far exceeds in quality and taste! Absolutely the best!!',
      numStars: 5,
      imgUrl: 'https://orig00.deviantart.net/d74a/f/2012/261/2/5/profile_picture_by_fairie_fancy_candies-d5f5ku4.jpg',
      productId: 1,
      userId: 1,
    }),
    Review.create({
      title: 'once you put them in the fridge for a few hours to harden the chocolate back up there were quite good.',
      content: 'Was pleasantly surprised by the quality of these. Bought them as a V-Day present a few days before Valentines day. They were delayed a day for some reason and when they got in the package they came in was soggy and the ice core was barely below room temperature. However, once you put them in the fridge for a few hours to harden the chocolate back up there were quite good.',
      numStars: 4,
      productId: 1,
      userId: 2,
    }),
    Review.create({
      title: 'Chocolate Strawberries',
      content: 'These are, without a doubt the best chocolate covered strawberries you can get. The strawberries were large, sweet, and, delicious. The chocolate covering was thick, I mean real thick. If you want a great treat, or, if you want something special, for that someone special, you are not going to get better than this. We bought a dozen, and, three days later, they were all gone. Man - that was good eating. Loved them.',
      numStars: 5,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41pROFiH3fL.jpg',
      productId: 1,
      userId: 4,
    }),
    Review.create({
      title: 'Three Stars',
      content: 'Good, but arguable as to whether it is worth the price for the premium brand.',
      numStars: 3,
      productId: 2,
      userId: 5,
    }),
    Review.create({
      title: 'Great Chocolate Bar',
      content: 'Did you know that cacao (real chocolate) contains probably the strongest antioxidants of all foods? Indeed. A man in AZ who eats chocolate daily is 115; a Mexican woman is 125 and the French woman who famously lived to 122 was a daily eater of chocoalte. The key is to have low sugar, and a high percentage of cacao---70% or higher. I have found that anything higher than 85% (like this one) is too bitter. Just a tiny bit of sugar goes a long way with cacao. The reason is especially like this brand is that the Europeans tend to have less mold in the way they process chocolate.',
      numStars: 4,
      productId: 3,
      userId: 3,
    }),
    Review.create({
      title: 'Chocolate is the solution. Adds a rich bitterness to your creations',
      content: 'I add this to my shakes, use it to make hot cocoa mix, and sprinkle on things as a garnish. Better yet next time you do a dry rub on the sweeter side, thrown in some of this and you get a savory richness. I have been using it for years and its fantastic. The only problem that knocks it down a star, is the sourcing of the cocoa is unknown. It would be nice to know if it follows fair trade practices.',
      numStars: 5,
      productId: 4,
      userId: 4,
    }),
    Review.create({
      title: '... find it so I thought this would be a good substitute. It is OK and probably worth doing ...',
      content: 'I was originally trying to order black cocoa but couldnt find it so I thought this would be a good substitute. It is OK and probably worth doing it again.I thought I was ordering something unique but did notice they sold this in our local grocery store. Thank God for Prime. The only negative was that there was a slight hole in the seal of the cocoa and it got cocoa powder all over the box. . . and the other item along with it.',
      numStars: 4,
      productId: 4,
      userId: 5,
    }),
    Review.create({
      title: 'Cant Beat This Shipping Option!',
      content: 'While these came earlier than I expected, they were a perfect Valentines treat for a great price. Not only was it surprisingly difficult to find plain milk chocolate berries, these were superbly packaged. They come with a freezer pack wrapped in plastic, and they have a foam portion in the box to make sure the berries stay in place. The most important part though is these are not small berries. The chocolate is really thick, and these are well worth the price. Plus, if you have Prime, you cant beat the shipping option! Ill definitely purchase again.',
      numStars: 5,
      productId: 5,
      userId: 5,
    }),
    Review.create({
      title: 'Four Stars',
      content: 'Not as good to me as the original',
      numStars: 4,
      productId: 6,
      userId: 3,
    }),
    Review.create({
      title: 'Love my hot chocolate.',
      content: 'I love my Milk Chocolate Hot Cocoa... It is tasty. I also like the convenience o opening my front door and picking up my goodies from TastyByte.com. ',
      numStars: 5,
      productId: 8,
      userId: 3,
    }),
    Review.create({
      title: 'Good quality',
      content: 'Good quality',
      numStars: 4,
      productId: 10,
      userId: 2,
    }),
    Review.create({
      title: 'liked them a',
      content: 'very delicious, liked them a lot',
      numStars: 5,
      productId: 12,
      userId: 2,
    }),
    Review.create({
      title: 'Good Suckers',
      content: 'These were some great lollipops. My youngest daughter just turned 5. My wife ordered these lollipops not per se for the lollipops but for the wrappers. Then she decorated dominos with the wrappers. The good news is I keep all the lollipops and they taste good. She also gave some away to the kids at the party and we even had some left for Valentine’s Day. I highly recommend these and the price is adequate.',
      numStars: 5,
      productId: 14,
      userId: 2,
    }),
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${reviews.length} reviews`)
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
