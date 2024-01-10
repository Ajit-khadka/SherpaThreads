const express = require('express')
const cors = require('cors')
const router = express.Router()
const {getAll, getOne, deleteUser} = require('../controllers/userControllers')
const { getAllAccessories,createAccessories, getOneAccessories, deleteAccessories, updateAccessories} = require('../controllers/acessoriesController')

router.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
        methods:"GET,POST,PUT,DELETE"
    }))

//User
router.get('/All/Users' , getAll)   
router.get('/All/Users/getOne/:userId' , getOne)   
router.delete('/All/Users/removeOne/:userId' , deleteUser)   

//Accessories
router.post('/Add/Accessories/create', createAccessories)
router.get('/Add/Accessories', getAllAccessories)
router.get('/Add/Accessories/:userId', getOneAccessories)
router.delete('/Add/Accessories/remove/:userId', deleteAccessories)
router.put('/Add/Accessories/update/:userId', updateAccessories)
// router.post("/Add/Accessories/create/upload-image",, uploadImage)

module.exports = router