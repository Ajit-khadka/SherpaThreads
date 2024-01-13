
const festivalsModel = require("../models/festivalsModel");

const createFestivals = async(req,res) => {
    try{
        const festivalsdata = new festivalsModel(req.body)
        // console.log(req.body)
        if(!festivalsdata){
            return res.status(404).json({msg : "Festivals Data not found"})
        } 

        const savedata = await festivalsdata.save()
        res.status(200).json({msg : "Festival product Added Successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
}

const getAllFestivals = async(req,res) => {
    try{
        const festivalsdata = await festivalsModel.find()
        if(!festivalsdata){
            return res.status(404).json({msg : "Festivals Data not found"})
        } 

        res.status(200).json({festivalsdata})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const getOneFestivals = async(req,res) => {
    try{
        const userId = req.params.userId
        const festivalsExists = await festivalsModel.findOne({_id: userId})
        if(!festivalsExists){
           return res.status(404).json({msg : "Festivals Data not found"})
        } 

        res.status(200).json({festivalsExists})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const deleteFestivals = async(req,res) => {
    try{
        const userId = req.params.userId
        const festivalsdata = await festivalsModel.findByIdAndDelete({_id: userId})
        if(!festivalsdata){
           return res.status(404).json({msg : "Festivals Data not found"})
        } 

        res.status(200).json({msg : "Festival product Deleted Successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

const updateFestivals = async(req,res) => {
    try{
        const userId = req.params.userId
        console.log(userId)
        const festivalsdata = await festivalsModel.findByIdAndUpdate(userId, {$set: req.body}, {new:true})
        console.log(req.body)
        if(!festivalsdata){
           return res.status(404).json({msg : "Festivals Data not found"})
        } 

        // console.log("updated acessories", festivalsdata)
        res.status(200).json({msg : "Festival product Updated"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

// const uploadImage = (req,res) => {
//     console.log(req.body)
//     res.send("uploaded!")
// }

module.exports = {getAllFestivals, createFestivals,  getOneFestivals, deleteFestivals, updateFestivals}