import Order from "../model/order.model.js";
// import OrderHistory from "../model/orderHistory.modet.js";
import Cart from "../model/cart.model.js";
import CartItem from "../model/cartItem.model.js";
import Product from "../model/product.model.js";
import { where } from "sequelize";


export const placeOrder = async (req, res, next) => {
    console.log(req.body);
    // id, userId, productId
    let { CartId, ProductId } = req.body;
    try {
        let cart = await CartItem.findOne({ where: { CartId, ProductId } });
        console.log(cart);
        if (cart) {
            console.log("true: the product is in the cart");
            // let cid = CartId;
            // console.log("2nd CartId : "+cid);`
            let admin = await Cart.findOne({ where: { id: CartId } })
            // console.log(admin.AdminId);
            let order = await Order.create({ AdminId: admin.AdminId, ProductId });
            return res.status(201).json({ message: "order placed!" })
        } else {
            res.status(400).json({ error: "can't place the order!" })
        }
    }
    catch (err) {
        res.status(401).json({ error: "server error", err })
    }
}


export const deleteOrder = async(req, res, next)=>{
    // order id
    let {orderId} = req.body;
    console.log(req.orderId);
    try{
        let deleteProduct = Order.destroy({where:{id: orderId}});
        if(deleteProduct)
            res.status(201).json({message: "order cancel"});
        else
            res.status(401).json({error: " order can't be canceled"});
    }catch(err){
        res.status(201).json({error: "server error", err});
    }
}
