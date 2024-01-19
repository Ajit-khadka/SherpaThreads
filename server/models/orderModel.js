const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
        userName: String,
        userId: String,
        productName: String,
        productId: String,
        productSection: String,
        productPrice: String,
        productImage: Array,
        bagCondition: Boolean,
        buyerGender: String,
        productColour: String,
        productSize: String,
     
},{timestamps: true})

const orderModel = mongoose.model("orders", orderSchema)

module.exports = orderModel

