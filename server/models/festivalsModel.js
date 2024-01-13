const mongoose = require('mongoose')

const festivalsSchema = new mongoose.Schema({
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

const festivalsdb = mongoose.model("Festivals", festivalsSchema)

module.exports = festivalsdb