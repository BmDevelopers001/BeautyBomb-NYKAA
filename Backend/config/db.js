const mongoose = require("mongoose");
require('dotenv').config()

const connection = mongoose.connect("mongodb+srv://beautybomb:beautybomb@cluster0.mjvxdlh.mongodb.net/BeautyBombDB?retryWrites=true&w=majority");

module.exports = connection