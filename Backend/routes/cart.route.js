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

cartRouter.get("/productData/:productId" , async (req,res) => {
    const productId = req.params.productId
    try {
        let productDetails = await productModel.findOne({ _id: productId })
        res.send(productDetails)
    }
    catch(err){
        console.log(err);
    }
})

cartRouter.post("/add" , async (req,res) => {
    const payload = req.body.productDetails;
    const userID = req.body.userID
    try{
        let productDetails = await productModel.findOne({_id : payload.productId})
        // res.send(productDetails)
        
        try {
            await cartModel.create({productDetails : payload , userID});
            res.send({"msg" : "Product added to cart successfully"})
        }
        catch (err) {
            console.log(err);
            res.send({ "err": "Error adding product to cart" })
        }
        
    }
    catch(err){
        console.log("Error getting productDetails");
        console.log(err);
    }
    
})

cartRouter.delete("/delete/:_id" , async (req,res) => {
    const id = req.params._id
    try{
        await cartModel.findByIdAndDelete(id);
        res.send({"msg" : "Cart deleted successfully"})
    }
    catch(err){
        console.log(err);
        res.send({"err" : "Error deleting cart"})
    }
})



module.exports = cartRouter;