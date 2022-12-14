// hello devlopers---------

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const connection = require("./config/db")
const productRouter = require("./routes/product.route")

app.get("/" , (req,res) => {
    res.send("Welcome to beautybomb server")
})








app.use("/products" , productRouter)

app.listen(8000 , async () => {
    try{
        await connection;
        console.log("Connected to DB Successfully");
    }
    catch(err){
        console.log("Error connecting DB");
        console.log(err);
    }
    console.log("Server Started at 8000");
})
