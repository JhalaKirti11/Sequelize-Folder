import express from "express";
import {adminSignUp, adminSignIn} from "../controller/admin.controller.js";
import {body} from "express-validator";

const router = express.Router();
router.get("/signup", 
    body("name","admin name can't be empty").notEmpty(),
    body("email", "email id can't be empty").notEmpty(),
    body("email", "it should be perfect email").isEmail(),
    body("password", "password can't be empty").notEmpty(),
    body("password", "password should have 6 to 10 characters").isLength({min:3, max:8}),
    body("mobile","proper mobile no.").isNumeric(),
    adminSignUp);

router.post("/signin", adminSignIn);

export default router;