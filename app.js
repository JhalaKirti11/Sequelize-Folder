import express from "express";
import bodyParser from "body-parser";
import adminRoute from "./routers/admin.route.js";
import productRoute from "./routers/product.route.js";
import categoryRoute from "./routers/category.route.js";
import CartRoute from "./routers/cart.route.js";
import orderRoute from "./routers/order.route.js";
import "./model/assosiation.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/admin", adminRoute);
app.use("/product", productRoute);
app.use("/category", categoryRoute);
app.use("/cart",CartRoute);
app.use("/order", orderRoute);

app.listen(3000, ()=>{
    console.log("server running...");
});