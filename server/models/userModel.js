const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleID: String,
    userName: String,
    email: String,
    profileImage: String,
},{timestamps:true})


const userdb = mongoose.model("users", userSchema)

module.exports = userdb