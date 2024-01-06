const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleID: String,
    userName: String,
    email: String,
    profileImage: String,
},{timestamps:true})


const userdb = new mongoose.model("users", userSchema)

module.exports = userdb