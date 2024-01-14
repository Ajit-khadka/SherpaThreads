const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email: { type: String, default: "admin12@gmail.com" },
    password: { type: String, default: "admin123" }
})

const adminModel = mongoose.model("Admin", adminSchema)

module.exports = adminModel