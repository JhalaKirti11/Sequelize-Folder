import {Sequelize} from "sequelize";

const sequelize = new Sequelize("sequeldb","root","1234",{
    dialect: "mysql",
    host:"localhost"
});


sequelize.authenticate()
.then(()=>{
    console.log("connected : ")
}).catch(err=>{
    console.log("not connected : "+err);
});

export default sequelize;