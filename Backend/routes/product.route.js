const { query } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const productRouter = express.Router();
const productModel = require("../models/product.model")

productRouter.get("/" , async (req,res) => {
    try{
        let productData = await productModel.find();
        res.send({"products":productData})
    }
    catch(err){
        console.log(err);
        res.send({"err" : "error getting data"})
    }
})

productRouter.get("/category/:category" , async (req,res) => {
    const category = req.params.category
    try{
        let data = await productModel.find({category});
        res.send(data)
    }
    catch(err){
        console.log(err);
        res.send({"err" : "Error getting filtered data"})
    }
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