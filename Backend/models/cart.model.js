const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    productId : String,
    userID : String
})

const cartModel = mongoose.model("cart" , cartSchema);

module.exports = cartModel