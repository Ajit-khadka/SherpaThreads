
const orderModel = require("../models/orderModel");

const createOrder = async(req,res) => {
    
    try{
       
        const orderdata = new orderModel(req.body)
        const orderCheck = await orderModel.findOne({productId : orderdata.productId, userId: orderdata.userId})
        // console.log("orderdata", orderdata)
        // console.log("orderCheck", orderCheck)

        if(!orderCheck){

            console.log("they dont match so add")
            if(!orderdata) {
                return res.status(404).json({msg: "order data not found"})
            }
        
        const savedata = await orderdata.save()
        res.status(200).json({msg: "Added as order"})

        }
        else{
            const orderExists = await orderModel.findOneAndDelete({productId : orderdata.productId, userId: orderdata.userId})
            if(!orderExists){
                return res.status(404).json({msg : "order data not found"})
             } 
            res.status(200).json({msg: "Removed from order"})
    
            console.log("they match so remove")
           
        }
    }catch(err){
        res.status(500).json({error : err})
    }
}

const checkOrder = async(req,res) => {
    try{
        const productId = req.params.productId
        const userId = req.params.userId
        const orderExists = await orderModel.findOne({productId: productId, userId: userId})

        if(!orderExists) {
            //user doesnot have that product as orderorites return false
           return res.status(200).json({msg: false})
        }
        else{
            //user has that product as orderorites return false
            return res.status(200).json({msg: true})
        }
    
    }catch(err){
        res.status(500).json({error : err})
    }
}


const getAllOrder = async(req,res) => {
    try{
        const userId = req.params.userId
        const orderdata = await orderModel.find({userId : userId})
        if(!orderdata) {
            return res.status(404).json({msg: "Order data not found"})
        }
    
        res.status(200).json({orderdata})
    
    }catch(err){
        res.status(500).json({error : err})
    }
}


const removeOrder = async(req,res) => {
    try{
        const productId = req.params.productId
        const userId = req.params.userId
        const orderdata = await orderModel.findOneAndDelete({productId:productId, userId: userId})
        if(!orderdata){
           return res.status(404).json({msg : "Order Data not found"})
        } 

        res.status(200).json({msg : "Order removed"})
    }catch(err){
        res.status(500).json({error : err})
    }
 
}



module.exports = {createOrder, getAllOrder, checkOrder, removeOrder}