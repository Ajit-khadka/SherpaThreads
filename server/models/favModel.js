const mongoose = require('mongoose')

const favSchema = new mongoose.Schema({
        userName: String,
        userId: String,
        productName: String,
        productId: String,
        productSection: String,
        productPrice: String,
        productImages: Array,
        favCondition: Boolean,
     
},{timestamps: true})

const favModel = mongoose.model("favorites", favSchema)

module.exports = favModel

