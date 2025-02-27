
const themesModel = require("../models/themesModel");
const orderModel = require("../models/orderModel");
const favModel = require("../models/favModel");

const createThemes = async(req,res) => {
    try{
        const themesdata = new themesModel(req.body)
        // console.log(req.body)
        if(!themesdata){
            return res.status(404).json({msg : "Themes Data not found"})
        } 

        const savedata = await themesdata.save()
        res.status(200).json({msg : "Theme product Added Successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
}

const getAllThemes = async(req,res) => {
    try{
        const themesdata = await themesModel.find()
        if(!themesdata){
            return res.status(404).json({msg : "Themes Data not found"})
        } 

        res.status(200).json({themesdata})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const getOneThemes = async(req,res) => {
    try{
        const userId = req.params.userId
        const themesExists = await themesModel.findOne({_id: userId})
        if(!themesExists){
           return res.status(404).json({msg : "Themes Data not found"})
        } 

        res.status(200).json({themesExists})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const deleteThemes = async(req,res) => {
    try{
        const userId = req.params.userId
        const themesdata = await themesModel.findByIdAndDelete({_id: userId})
        if(!themesdata){
           return res.status(404).json({msg : "Themes Data not found"})
        } 

        res.status(200).json({msg : "Theme product Deleted Successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const updateThemes = async(req,res) => {
    try{
        const userId = req.params.userId
        // console.log(userId)
        const themesdata = await themesModel.findByIdAndUpdate(userId, {$set: req.body}, {new:true})
        // console.log(req.body)
        if(!themesdata){
           return res.status(404).json({msg : "Themes Data not found"})
        } 

        // console.log("updated acessories", themesdata)
        res.status(200).json({msg : "Theme product Updated"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const deleteThemeFav = async(req,res) => {
    try{
        const productId = req.params.productId
        const themesdata = await favModel.deleteMany({productId: productId})
        if(!themesdata){
           return res.status(404).json({msg : "Theme Data not found"})
        } 

        res.status(200).json({msg : "Product Cleared from user favorites"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const deleteThemeOrder = async(req,res) => {
    try{
        const productId = req.params.productId
        const themesdata = await orderModel.deleteMany({productId: productId})
        if(!themesdata){
           return res.status(404).json({msg : "Theme Data not found"})
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

module.exports = {getAllThemes, createThemes,  getOneThemes, deleteThemes, updateThemes,  deleteThemeFav, deleteThemeOrder}