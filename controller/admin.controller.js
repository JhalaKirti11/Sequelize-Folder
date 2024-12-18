import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import admin from "../model/admin.js";

export const adminSignUp = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({ error: errors.array() });
        }

        let { name, email, password, mobile } = req.body;

        let saltKey = bcrypt.genSaltSync(10);
        password = bcrypt.hashSync(password, saltKey);
        req.body.password = password; 

        let insert = admin.create({name, email, password, mobile});
        return res.status(201).json({ message: "data inserted!" });
    }
    catch (err) {
        return res.status(401).json({ error: "sth went wrong..." });
    }
}

export const adminSignIn = async (req, res, next) => {
    let { email, password } = req.body;
    let tuple = await admin.findOne({ where: { email }, raw: true });
    if (tuple) {
        let passKey = tuple.password;
        let status = bcrypt.compareSync(password, passKey);
        if (status)
            return res.status(200).json({ message: "valid admin!",tuple});
        else
            return res.status(401).json({ error: "Not a valid Admin..." })
    }
    return res.status(401).json({ error: "sth went wrong" });
}
