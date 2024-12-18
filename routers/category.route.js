import express from "express";
import { addBulkCategory, addCategory, viewCategory, deleteCategory, editCategory } from "../controller/category.controller.js";

let router = express.Router();

router.get("/add-bulkcategory", addBulkCategory);
router.get("/add-category", addCategory);
router.post("/view-category", viewCategory);
router.get("/delete-category/:name", deleteCategory);
router.put("/edit-category/:name", editCategory);

export default router;