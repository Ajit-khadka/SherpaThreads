const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    googleID: String,
    userName: String,
    email: String,
    profileImage: String,
    role: {
        type: String,
        default: 'User',
    },
},{timestamps:true})


const userdb = mongoose.model("users", userSchema)

module.exports = userdb