import Admin from "./admin.js";
import Product from "./product.model.js";
// import category from "./category.model.js";
import Cart from "./cart.model.js";
import CartItems from "./cartItem.model.js";
import Order from "./order.model.js"
// import OrderHistory from "./orderHistory.model.js";


Admin.hasOne(Cart);
Cart.belongsTo(Admin);

Cart.belongsToMany(Product, { through: CartItems });
Product.belongsToMany(Cart, { through: CartItems });


Admin.hasMany(Order);
Order.belongsTo(Admin);

Product.hasMany(Order);
Order.belongsTo(Product);


// Order.belongsToMany(Product, { through: OrderHistory });
// Product.belongsToMany(Order, { through: OrderHistory });


export default { Admin, Product, CartItems, Cart, Order};