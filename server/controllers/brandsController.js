
const brandsModel = require("../models/brandsModel");
const orderModel = require("../models/orderModel");
const favModel = require("../models/favModel");

const createBrands = async(req,res) => {
    try{
        const brandsdata = new brandsModel(req.body)
        // console.log(req.body)
        if(!brandsdata){
            return res.status(404).json({msg : "Brand Data not found"})
        } 

        const savedata = await brandsdata.save()
        res.status(200).json({msg : "Brand Product Added Successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
}

const getAllBrands = async(req,res) => {
    try{
        const brandsdata = await brandsModel.find()
        if(!brandsdata){
            return res.status(404).json({msg : "Brand Data not found"})
        } 

        res.status(200).json({brandsdata})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const getOneBrands = async(req,res) => {
    try{
        const userId = req.params.userId
        const brandsExists = await brandsModel.findOne({_id: userId})
        if(!brandsExists){
           return res.status(404).json({msg : "Brand Data not found"})
        } 

        res.status(200).json({brandsExists})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const deleteBrands = async(req,res) => {
    try{
        const userId = req.params.userId
        const brandsdata = await brandsModel.findByIdAndDelete({_id: userId})
        if(!brandsdata){
           return res.status(404).json({msg : "Brand Data not found"})
        } 

        res.status(200).json({msg : "Brand Product Deleted Successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const updateBrands = async(req,res) => {
    try{
        const userId = req.params.userId
        // console.log(userId)
        const brandsdata = await brandsModel.findByIdAndUpdate(userId, {$set: req.body}, {new:true})
        // console.log(req.body)
        if(!brandsdata){
           return res.status(404).json({msg : "Brand Data not found"})
        } 

        res.status(200).json({msg : "Brand Product Updated"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const deleteBrandFav = async(req,res) => {
    try{
        const productId = req.params.productId
        const brandsdata = await favModel.deleteMany({productId: productId})
        if(!brandsdata){
           return res.status(404).json({msg : "Brands Data not found"})
        } 

        res.status(200).json({msg : "Product Cleared from user favorites"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const deleteBrandOrder = async(req,res) => {
    try{
        const productId = req.params.productId
        const brandsdata = await orderModel.deleteMany({productId: productId})
        if(!brandsdata){
           return res.status(404).json({msg : "Brands Data not found"})
        } 

        res.status(200).json({msg : "Product Cleared from user orders"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

// const uploadImage = (req,res) => {
//     console.log(req.body)
//     res.send("uploaded!")
// }

module.exports = { createBrands,  getOneBrands, deleteBrands, updateBrands, getAllBrands, deleteBrandFav, deleteBrandOrder}