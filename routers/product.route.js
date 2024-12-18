import express from "express";
import {addproduct, addBulkproduct, viewAllProduct,deleteProduct, updateProduct} from "../controller/product.controller.js";
// import {body} from "express-validator";

const routerp = express.Router();
routerp.get("/add-product",addproduct);

routerp.get("/add-Bulkproduct",addBulkproduct);

routerp.post("/view-product", viewAllProduct);

routerp.get("/delete-product", deleteProduct);

routerp.put("/update-product/:id", updateProduct);

export default routerp;