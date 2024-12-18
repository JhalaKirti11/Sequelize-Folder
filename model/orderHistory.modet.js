import sequelize from "../db/dbConfig.js";
import {DataTypes} from "sequelize"

const OrderHistory = sequelize.define("OrderHistory",{});

export default OrderHistory;