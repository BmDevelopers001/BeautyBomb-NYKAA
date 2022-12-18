const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sellerRoute=  express.Router();

const sellerModel = require("../models/seller.model")

sellerRoute.post("/signup" , async (req,res) => {
    const { name, email, password } = req.body;
    const sellerPresent = await sellerModel.findOne({ email })
    //TODO
    if (sellerPresent?.email) {
        res.send("Try loggin in, seller already exist")
    }
    else {
        try {
            bcrypt.hash(password, 4, async function (err, hash) {
                const user = new sellerModel({ name, email, password: hash })
                await user.save()
                res.send({ "msg": "Sign up successfull" })
            });

        }
        catch (err) {
            console.log(err)
            res.send("Something went wrong, pls try again later")
        }
    }
})

sellerRoute.post("/login" , async (req,res) => {
    const { email, password } = req.body;
    try {
        const user = await sellerModel.find({ email })
        
        if (user.length > 0) {
            const hashed_password = user[0].password;
            bcrypt.compare(password, hashed_password, function (err, result) {
                if (result) {
                    const token = jwt.sign({ "sellerId": user[0]._id }, 'hush');
                    res.send({ "msg": "Login successfull", "token": token, "seller": user[0].name, "sellerid": user[0]._id })
                }
                else {
                    res.send({ "msg": "Login failed" })
                }
            })
        }
        else {
            res.send({ "msg": "Login failed" })
        }
    }
    catch {
        res.send({ "err": "Something went wrong, please try again later" })
    }
})


module.exports = sellerRoute;