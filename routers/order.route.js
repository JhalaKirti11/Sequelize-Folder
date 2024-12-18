import express from "express";
import {placeOrder, deleteOrder} from "../controller/order.controller.js";

const router = express.Router();

router.get("/place-order",placeOrder);
router.get("/cancel-order", deleteOrder);

export default router;