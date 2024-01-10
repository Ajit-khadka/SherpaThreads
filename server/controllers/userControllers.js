const userModel = require('../models/userModel');

const getAll = async (req,res) => {
    try{
        const userdata = await userModel.find();
        if(!userdata){
            return res.status(404).json({msg : "User Data not found"})
        }
        
        res.status(200).json({userdata})
    }catch(err){
        res.status(500).json({error : err})
    }
}

const getOne = async (req,res) => {
    try{
        const userId = req.params.userId
        const userdata = await userModel.findById(userId)
    
    if(!userdata){
        return res.status(404).json({msg: "User Data not found"})
    }
    res.status(200).json({userdata})
    }catch(err){
        res.status(500).json({error : err})
    }
    
}

// const updateOne = async (req,res) => {
//     try{
//         const userId = req.params.userId
//         const userdata = await userModel.findOneAndUpdate({_id : userId}, req.body, {new: true})
        
//         if(!userdata){
//            return res.status(404).json({msg: "User Data not found"})
//         }
//         res.status(200).json({userdata})
//     }catch(err){
//         res.status(500).json({error : err})
//     }
   
// }

const deleteUser = async (req,res) => {
    try{
        const userId = req.params.userId
        const userdata = await userModel.findOneAndDelete({_id : userId})

        if(!userdata) {
           return res.status(404).json({msg: "User Data not found"})
        }

        res.status(200).json({msg: "User deleted!"})
    }catch(err){
        res.status(500).json({error : err})
    }
} 

module.exports = {getAll, getOne, deleteUser}