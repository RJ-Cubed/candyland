const User = require('./user')
const Review = require('./review')
const Address = require('./address')
const Category = require('./category')
const Order = require('./order')
const OrderLine = require('./orderline')
const Product = require('./product')

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// Product-Category associations
Product.belongsToMany(Category, {through: 'ProductCategory'});
Category.belongsToMany(Product, {through: 'ProductCategory'});

//Review associations
Product.belongsToMany(User, {through: Review});  //trying to decide if we want to do this or not
User.belongsToMany(Product, {through: Review});  //trying to decide if we want to do this or not
Product.hasMany(Review);
Review.belongsTo(Product);
User.hasMany(Review);
Review.belongsTo(User);


//Orderline Associations
Product.belongsToMany(Order, {through: OrderLine});
Order.belongsToMany(Product, {through: OrderLine});
Product.hasMany(OrderLine);
OrderLine.belongsTo(Product);
Order.hasMany(OrderLine);
OrderLine.belongsTo(Order);

// User-Order association
Order.belongsTo(User);
User.hasMany(Order);

//User Address associations
Address.belongsTo(User, {as: 'UserId'});
User.hasMany(Address, {as: 'UserId'});

User.belongsTo(Address, {as: 'UserAddress'})
Address.belongsTo(User, {as: 'UserAddress'})

//Order Address associations
Order.belongsTo(Address, {as: 'shipAddress'})
Address.belongsTo(Order, {as: 'shipAddress'})
Order.belongsTo(Address, {as: 'billAddress'})
Address.belongsTo(Order, {as: 'billAddress'})


module.exports = {
  User,
  Review,
  Address,
  Category,
  Order,
  OrderLine,
  Product,
}
