const mongoose = require('mongoose')

const giveSchema = new mongoose.Schema({
    userId : String,
    name : String,
    phone : String
},{timestamps: true})

const giveModel = mongoose.model("giveAways", giveSchema)

module.exports = giveModel