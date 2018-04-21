/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as AllUsers} from './all-users.jsx'
export {default as ShoppingCart} from './shoppingCart/shoppingCart.jsx'

export {default as AllProductsHome} from './products/all-products.jsx'
export {ProductCardView} from './products/product-card.jsx'
export {default as AllReviews} from './reviews/all-reviews.jsx'
export {ReviewCardView} from './reviews/review-card.jsx'
export {default as SingleProduct} from './products/single-product.jsx'
export {default as AddProduct} from './products/addProduct.jsx'
export {default as EditProduct} from './products/editProduct.jsx'
export {default as AllCategories} from './all-categories.jsx'
export {default as CategoryCardView} from './category-card.jsx'

export {default as OrderDetail} from './orders/order-detail.jsx'
export {default as OrderView} from './orders/order-view.jsx'
export {default as AdminSort} from './orders/admin-sort.jsx'
