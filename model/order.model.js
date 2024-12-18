import sequelize from "../db/dbConfig.js";
import {DataTypes} from "sequelize";

const Order = sequelize.define("Order", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    }
});

export default Order;