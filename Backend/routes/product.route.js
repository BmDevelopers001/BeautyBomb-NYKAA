const { query } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const authenticate = require("../middlewares/seller.auth");

const productRouter = express.Router();
const productModel = require("../models/product.model")

// productRouter.use(authenticate)


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

productRouter.get("/productid/:_id", async (req, res) => {
    const _id = req.params._id
    try {
        let data = await productModel.findOne({ _id });
        res.send(data)
    }
    catch (err) {
        console.log(err);
        res.send({ "err": "Error getting filtered data" })
    }
})
productRouter.get("/sellerpd/:slid", async (req, res) => {
    const slid = req.params.slid
    
    try {
        let data = await productModel.find({ sellerId: slid });
        res.send(data)
    }
    catch (err) {
        console.log(err);
        res.send({ "err": "Error getting filtered data" })
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

productRouter.patch("/edit/:productID", async(req, res)=>{
    const pID = req.params.productID
    const sellerId = req.body.sellerId
    // console.log(sellerId);
    const newData = req.body
    try {
        const product = await productModel.findOne({_id: pID})
        

        if(sellerId == product.sellerId){
            await productModel.findByIdAndUpdate({_id: pID}, newData)
            res.json({"msg":"Product edited successfully"})
        }else{
            res.json({"msg":"Not authorized"})
        }
    } catch (err) {
        console.log(err);
        res.json({"msg":"Note edit failed"})
    }
})
productRouter.delete("/delete/:productID", async(req, res)=>{
    const pID = req.params.productID
    const sellerId = req.body.sellerId
    
    try {
        const product = await productModel.findOne({_id: pID})
        if(sellerId == product.sellerId){
            await productModel.findByIdAndDelete({_id: pID})
            res.json({"msg":"Product Deleted successfully"})
        }else{
            res.json({"msg":"Not authorized"})
        }
    } catch (err) {
        console.log(err);
        res.json({"msg":"Note edit failed"})
    }
})



module.exports = productRouter