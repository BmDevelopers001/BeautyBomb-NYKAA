const express = require("express");
const mongoose = require("mongoose");

const cartRouter = express.Router();

const cartModel = require("../models/cart.model");
const productModel = require("../models/product.model");
const { userModel } = require("../models/User.model")
const { Userauthenticate } = require("../middlewares/user.auth")

cartRouter.use(Userauthenticate)
cartRouter.get("/" , async (req,res) => {
    const userID = req.body.userID
    try{
        const cartData = await cartModel.find({userID});
        res.send(cartData)
    }
    catch(err){
        console.log(err);
        res.send({"err" : "error getting data from cart"})
    }
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