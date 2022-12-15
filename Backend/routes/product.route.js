const express = require("express");
const mongoose = require("mongoose");

const productRouter = express.Router();
const productModel = require("../models/product.model")

productRouter.get("/" , (req,res) => {
    res.send("Product Router")
})

productRouter.post("/add" , async (req,res) => {
    const payload = req.body;

    try{
        await productModel.create(payload);
        res.send({"msg" : "Product added"})
    }
    catch(err){
        res.send({"err" : "Error creating product"});
        console.log(err);
    }
})




module.exports = productRouter