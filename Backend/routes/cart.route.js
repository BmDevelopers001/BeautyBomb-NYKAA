const express = require("express");
const mongoose = require("mongoose");

const cartRouter = express.Router();

const cartModel = require("../models/cart.model");
const productModel = require("../models/product.model");
const { userModel } = require("../models/User.model")

cartRouter.get("/" , (req,res) => {
    res.send("cart")
})

cartRouter.post("/add" , async (req,res) => {
    const payload = req.body;
    try{
        await cartModel.create(payload);
        res.send({"msg" : "Product added to cart successfully"})
    }
    catch(err){
        console.log(err);
        res.send({"err" : "Error adding product to cart"})
    }
})




module.exports = cartRouter;