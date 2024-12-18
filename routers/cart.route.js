import express from "express";
import {addTocart, getCartItems, deleteCartItem} from "../controller/cart.controller.js";
// import {body} from "express-validator";


const router = express.Router();
router.post("/add-cart", addTocart);
router.get("/get-cartItem/:AdminId", getCartItems);
router.get("/delete-cart", deleteCartItem);


export default router;