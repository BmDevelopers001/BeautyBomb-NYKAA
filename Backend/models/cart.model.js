const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    productId : String,
    userId : String
})

const cartModel = mongoose.model("cart" , cartSchema);

module.exports = cartModel