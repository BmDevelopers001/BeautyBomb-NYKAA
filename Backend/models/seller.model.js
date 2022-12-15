const mongoose = require("mongoose");

const sellerSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const sellerModel = mongoose.model("seller" , sellerSchema)

module.exports = sellerModel