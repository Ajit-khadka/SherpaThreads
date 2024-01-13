const mongoose = require('mongoose')

const themesSchema = new mongoose.Schema({
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

const themesdb = mongoose.model("Themes", themesSchema)

module.exports = themesdb