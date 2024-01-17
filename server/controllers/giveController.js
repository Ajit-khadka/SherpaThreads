const giveModel = require("../models/giveModel");

const createGiveAway = async(req,res) => {
    
    try{
       
        const givedata = new giveModel(req.body)
        const giveExists = await giveModel.findOne({userId : givedata.userId})
        
       if(!giveExists){
            if(!givedata) {
                res.status(404).json({msg: "GiveAway data not found"})
            }
        
            const savedata = await givedata.save()
            res.status(200).json({msg: "you Registered for GiveAway"})
        }
        else{
            res.status(200).json({msg: "you Already Registered for GiveAway"})
        }
    }catch(err){
        res.status(500).json({error : err})
    }
}

const getAllGiveAway = async(req,res) => {
    try{
        const givedata = await giveModel.find()
        if(!givedata) {
            res.status(404).json({msg: "GiveAway data not found"})
        }
    
        res.status(200).json({givedata})
    
    }catch(err){
        res.status(500).json({error : err})
    }
}


const removeAllGive = async(req,res) => {
    try{
        const givedata = await giveModel.deleteMany()
        if(!givedata) {
            res.status(404).json({msg: "GiveAway data not found"})
        }
    
        res.status(200).json({msg: "Participated Users are removed"})
    
    }catch(err){
        res.status(500).json({error : err})
    }
}

module.exports = {createGiveAway, getAllGiveAway, removeAllGive}