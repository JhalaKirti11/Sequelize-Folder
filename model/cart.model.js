import sequelize from "../db/dbConfig.js";
import {DataTypes} from "sequelize";

const Cart = sequelize.define("Cart", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    }
});

export default Cart;