const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name : String,
    qty : String,
    price : Number,
    category : String,
    gender : String,
    image : Array,
    description : String,
    rating : Number,
    sellerId : String
})

const productModel = mongoose.model("products" , productSchema);

module.exports = productModel
