const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    productDetails : Object,
    userID : String
})

const cartModel = mongoose.model("cart" , cartSchema);

module.exports = cartModel