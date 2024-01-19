const favModel = require("../models/favModel");

const createFav = async(req,res) => {
    
    try{
       
        const favdata = new favModel(req.body)
        const favCheck = await favModel.findOne({productId : favdata.productId, userId: favdata.userId})
        // console.log("favdata", favdata)
        // console.log("favCheck", favCheck)

        if(!favCheck){

            console.log("they dont match so add")
            if(!favdata) {
                return res.status(404).json({msg: "Favorites data not found"})
            }
        
        const savedata = await favdata.save()
        res.status(200).json({msg: "Added as Favorites"})

        }
        else{
            const favExists = await favModel.findOneAndDelete({productId : favdata.productId, userId: favdata.userId})
            if(!favExists){
                return res.status(404).json({msg : "Favorites data not found"})
             } 
            res.status(200).json({msg: "Removed from Favorites"})
    
            console.log("they match so remove")
           
        }
    }catch(err){
        res.status(500).json({error : err})
    }
}

const checkFav = async(req,res) => {
    try{
        const productId = req.params.productId
        const userId = req.params.userId
        const favExists = await favModel.findOne({productId: productId, userId: userId})

        if(!favExists) {
            //user doesnot have that product as favorites return false
           return res.status(200).json({msg: false})
        }
        else{
            //user has that product as favorites return false
            return res.status(200).json({msg: true})
        }
    
    }catch(err){
        res.status(500).json({error : err})
    }
}


const getAllFav = async(req,res) => {
    try{
        const userId = req.params.userId
        const favdata = await favModel.find({userId : userId})
        if(!favdata) {
            return res.status(404).json({msg: "Fav data not found"})
        }
    
        res.status(200).json({favdata})
    
    }catch(err){
        res.status(500).json({error : err})
    }
}


const removeFav = async(req,res) => {
    try{
        const productId = req.params.productId
        const userId = req.params.userId
        const favdata = await favModel.findOneAndDelete({productId:productId, userId: userId})
        if(!favdata){
           return res.status(404).json({msg : "favorites Data not found"})
        } 

        res.status(200).json({msg : "Favorite removed"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}

module.exports = {createFav, getAllFav, checkFav, removeFav} 