import CartItems from "../model/cartItem.model.js";
import Cart from "../model/cart.model.js";
import Product from "../model/product.model.js";


export const addTocart = async (request, response, next) => {
  let { AdminId, ProductId } = request.body;
  console.log(AdminId, ProductId);
  console.log(request.body);

  try {
    let cart = await Cart.findOne({ where: { AdminId } });
    console.log(cart);
    if (cart) {
      let status = await CartItems.findOne({ where: { CartId: cart.id, ProductId } });
      if (status)
        return response.status(200).json({ message: "Item is already added in cart" });
      await CartItems.create({ CartId: cart.id, ProductId });
      return response.status(201).json({ message: "Item successfully added in cart" });
    }
    else {
      let cart = await Cart.create({ AdminId });
      //  console.log(cart);
      console.log(AdminId)
      let cartId = cart.dataValues.id;
      console.log("cartId : " + cartId);
      let cartItems = await CartItems.create({ ProductId, cartId });
      return response.status(201).json({ message: "Item added in cart.." });
    }
  }
  catch (err) {
    console.log(err);

    return response.status(500).json({ error: "Internal Server Error" });
  }
}

export const getCartItems = async (request, response, next) => {
  let AdminId = request.params.AdminId;
  console.log(AdminId);
  let itemList = await Cart.findAll({ where: { AdminId }, raw: true, include: [{ model: Product, required: true }] });
  return response.status(200).json({ "cart-item-list": itemList });
}

export const deleteCartItem = async (req, res, next) => {
  let { cartId, productId } = req.body;
  try {
    let cart = await CartItems.destroy({ where: { CartId: cartId, ProductId: productId } });
    if (cart)
      res.status(201).json({ msg: "removed from cart" });
    else
      res.status(401).json({ error: "can't remove the product" })
  } catch (err) {
    res.status(401).json({ error: "server error" });
  }
}
