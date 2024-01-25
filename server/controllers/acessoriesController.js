
const accessoriesModel = require("../models/accessoriesModel");
const orderModel = require("../models/orderModel");
const favModel = require("../models/favModel");

const createAccessories = async(req,res) => {
    try{
        const accessoriesdata = new accessoriesModel(req.body)
        // console.log(req.body)
        if(!accessoriesdata){
            return res.status(404).json({msg : "Accessories Data not found"})
        } 

        const savedata = await accessoriesdata.save()
        res.status(200).json({msg : "Accessories Added Successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
}

const getAllAccessories = async(req,res) => {
    try{
        const accessoriesdata = await accessoriesModel.find()
        if(!accessoriesdata){
            return res.status(404).json({msg : "Accessories Data not found"})
        } 

        res.status(200).json({accessoriesdata})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const getOneAccessories = async(req,res) => {
    try{
        const userId = req.params.userId
        const accessoriesExists = await accessoriesModel.findOne({_id: userId})
        if(!accessoriesExists){
           return res.status(404).json({msg : "Accessories Data not found"})
        } 

        res.status(200).json({accessoriesExists})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const deleteAccessories = async(req,res) => {
    try{
        const userId = req.params.userId
        const accessoriesdata = await accessoriesModel.findByIdAndDelete({_id: userId})
        if(!accessoriesdata){
           return res.status(404).json({msg : "Accessories Data not found"})
        } 

        res.status(200).json({msg : "Accessories Deleted Successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const updateAccessories = async(req,res) => {
    try{
        const userId = req.params.userId
        console.log(userId)
        const accessoriesdata = await accessoriesModel.findByIdAndUpdate(userId, {$set: req.body}, {new:true})
        console.log(req.body)
        if(!accessoriesdata){
           return res.status(404).json({msg : "Accessories Data not found"})
        } 

        // console.log("updated acessories", accessoriesdata)
        res.status(200).json({msg : "Accessories Updated"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}


const deleteAccessFav = async(req,res) => {
    try{
        const productId = req.params.productId
        const accessoriesdata = await favModel.deleteMany({productId: productId})
        if(!accessoriesdata){
           return res.status(404).json({msg : "Accessories Data not found"})
        } 

        res.status(200).json({msg : "Product Cleared from user favorites"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const deleteAccessOrder = async(req,res) => {
    try{
        const productId = req.params.productId
        const accessoriesdata = await orderModel.deleteMany({productId: productId})
        if(!accessoriesdata){
           return res.status(404).json({msg : "Accessories Data not found"})
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

module.exports = {getAllAccessories, createAccessories,  getOneAccessories, deleteAccessories, updateAccessories , deleteAccessFav, deleteAccessOrder}