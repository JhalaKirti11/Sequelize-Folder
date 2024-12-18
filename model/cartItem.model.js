import sequelize from "../db/dbConfig.js";
import {DataTypes} from "sequelize"

const CartItems = sequelize.define("cartItem",{});

export default CartItems;