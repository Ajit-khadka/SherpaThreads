const adminModel = require("../models/adminModel")

const getAdmin = async (req,res) => {
    try{
        const adminCredentials = req.body
        // console.log(adminCredentials.password)   
        const adminExists = await adminModel.findOne({email: adminCredentials.email, password: adminCredentials.password})
        // console.log(adminExists)
        if(adminExists){
           return res.status(200).json({msg: "Matched"})

        }else{
            return res.status(200).json({msg :"User Credentials do not Match"})
        }
    }catch(err){
        res.status(500).json({"error" : err})

    }
}

// const createAdmin = async(req,res) => {
//     try{
//         const admindata = new adminModel(req.body)
//         // console.log(req.body)
//         if(!admindata){
//             return res.status(404).json({msg : "admin Data not found"})
//         } 

//         const savedata = await admindata.save()
//         res.status(200).json({msg : "admin Added Successfully"})
//     }catch(err){
//         res.status(500).json({error : err})
//     }
// }

module.exports = {getAdmin}