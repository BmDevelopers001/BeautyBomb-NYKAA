const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:String,
    email:{ 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
      },
    password:String,
    phone:String

})


const UserModel = mongoose.model("users",userSchema)

module.exports = {
    UserModel
}