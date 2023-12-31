const mongoose = require('mongoose')

const accessoriesSchema = new mongoose.Schema({
    productName : String,
    productColor : String,
    productPrice : String,
    productDesc : String,
    productCategory : {
        type : String,
        feature : String,
    }
},{timestamps: true})

const accessoriesdb = new mongoose.model("Accessories", accessoriesSchema)

module.exports = accessoriesdb