const express = require('express')
const cors = require('cors')
const router = express.Router()
const {getAll, getOne, deleteUser} = require('../controllers/userControllers')
const { getAllAccessories,createAccessories, getOneAccessories, deleteAccessories, updateAccessories} = require('../controllers/acessoriesController')
const { getAllBrands, createBrands,  getOneBrands, deleteBrands, updateBrands, } = require('../controllers/brandsController')
const { getAllFestivals, createFestivals,  getOneFestivals, deleteFestivals, updateFestivals, } = require('../controllers/festivalsController')
const { getAllThemes, createThemes,  getOneThemes, deleteThemes, updateThemes, } = require('../controllers/themesController')
const {getAdmin} = require('../controllers/adminController')

router.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
        methods:"GET,POST,PUT,DELETE"
    }))


//getAdmin
// router.post('/Admin', createAdmin)
router.post('/Admin', getAdmin)
// router.post('/Admin/logout', logoutAdmin)

//AllUser
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

//Brands
router.post('/Add/Brands/create', createBrands)
router.get('/Add/Brands', getAllBrands)
router.get('/Add/Brands/:userId', getOneBrands)
router.delete('/Add/Brands/remove/:userId', deleteBrands)
router.put('/Add/Brands/update/:userId', updateBrands)

//Festivals
router.post('/Add/Festivals/create', createFestivals)
router.get('/Add/Festivals', getAllFestivals)
router.get('/Add/Festivals/:userId', getOneFestivals)
router.delete('/Add/Festivals/remove/:userId', deleteFestivals)
router.put('/Add/Festivals/update/:userId', updateFestivals)

//Themes
router.post('/Add/Themes/create', createThemes)
router.get('/Add/Themes', getAllThemes)
router.get('/Add/Themes/:userId', getOneThemes)
router.delete('/Add/Themes/remove/:userId', deleteThemes)
router.put('/Add/Themes/update/:userId', updateThemes)


module.exports = router