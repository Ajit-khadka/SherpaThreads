const mongoose = require('mongoose')

const accessoriesSchema = new mongoose.Schema({
    productName: String,
    productPrice: Number,
    productCategory: String,
    productBrand: String,
    productDescription: Array,
    productFeature: {
        fastShip: Boolean,
        ecoFriendly: Boolean,
        freeReturn: Boolean,
        perfectGift: Boolean
    },
    productImages: Array
},{timestamps: true})

const accessoriesdb = mongoose.model("Accessories", accessoriesSchema)

module.exports = accessoriesdb