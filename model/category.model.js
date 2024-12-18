import sequelize from "../db/dbConfig.js";
import {DataTypes} from "sequelize";

const Category = sequelize.define("Category", {
    slug:{
        type: DataTypes.STRING,
        allowNull : false
    },
    name:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull : false
    },
    url:{
        type: DataTypes.STRING,
        allowNull:false
    }
});

sequelize.sync()
.then(result=>{
    console.log("category table created...");
}).catch(err=>{
    console.log("category table not created!")
});

export default Category;