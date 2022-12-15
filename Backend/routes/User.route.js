const express = require("express");
const mongoose = require("mongoose");
const { UserModel } = require("../models/User.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserRouter = express.Router();


UserRouter.post("/signup",(req,res)=>{
    console.log(req.body)
    const {email,username,password,phone}  = req.body
    try {
        bcrypt.hash(password, 4 ,async(err,hash)=>{
        const user = new UserModel({email:email,username:username,phone:phone,password:hash});
        await user.save();
        res.send({"data":req.body})
        })
        
    } catch (error) {
        console.log(error)
    }
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await UserModel.find({email:email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    const token = jwt.sign({"userID":user[0]._id}, 'yogi');
                    res.send({"msg":"Login Success","token":token})
                }
                else{
                    res.send("Invalid Detail")
                }
            })  
        }
        else{
            res.send("Invalid Username Password")
        }
    } catch (error) {
        console.log("something went wrong")
    }
})


module.exports={
    UserRouter
}