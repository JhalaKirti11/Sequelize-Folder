import sequelize from "../db/dbConfig.js";
import {DataTypes} from "sequelize"

const Admin = sequelize.define("Admin",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull : false,
        autoIncrement : true
    },
    name:{
        type: DataTypes.STRING,
        allowNull : false
    },
    email:{
        type: DataTypes.STRING,
        allowNull : false
    },
    password :{
        type: DataTypes.STRING,
        allowNull : false
    },
    mobile:{
        type: DataTypes.BIGINT,
        allowNull:false
    }
} );

sequelize.sync()
.then(()=>{
    console.log("table created : ");
}).catch((err)=>{
    console.log(err);
});


export default Admin;