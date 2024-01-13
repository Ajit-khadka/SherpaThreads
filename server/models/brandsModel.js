const mongoose = require('mongoose')

const brandsSchema = new mongoose.Schema({
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
    productImages: Array,
    productSection: String,
},{timestamps: true})

const brandsdb = mongoose.model("Brands", brandsSchema)

module.exports = brandsdb