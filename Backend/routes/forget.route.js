const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require('nodemailer');
const { UserModel } = require("../models/User.model");


const forgetRoute = express.Router();



forgetRoute.post("/",async(req,res)=>{

        try {
            const email  = req.body.email;
            const user =  await UserModel.find({email:email})
            let random = GenerateOtp();

            await sendEmail(email,random);

            
            res.send({"user":user,"otp":random})
        } catch (error) {
            console.log(error)
        }
        

})

const GenerateOtp = ()=>{
    return(Math.floor(100000 + Math.random() * 900000));
}

const sendEmail = (email,otp)=>{
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'yogendra311204@gmail.com',
            pass: 'zkqzhepxjszpzhbu'
        }
    });
    
    let mailOptions = {
        from: 'yogendra311204@gmail.com',
        to: `${email}`,
        subject: 'Change Password',
        text: `Hello this is your one time password dont share it with anyone:-${otp}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error.message);
        }
        console.log('success');
    });
}

module.exports={
    forgetRoute
}
