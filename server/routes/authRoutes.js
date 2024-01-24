const express = require('express')
const cors = require('cors')
const router = express.Router()
const {getAll, getOne, deleteUser,deleteUserFav, deleteUserOrder} = require('../controllers/userControllers')
const { getAllAccessories,createAccessories, getOneAccessories, deleteAccessories, updateAccessories, deleteAccessFav, deleteAccessOrder } = require('../controllers/acessoriesController')
const { getAllBrands, createBrands,  getOneBrands, deleteBrands, updateBrands, deleteBrandFav, deleteBrandOrder} = require('../controllers/brandsController')
const { getAllFestivals, createFestivals,  getOneFestivals, deleteFestivals, updateFestivals, deleteFesFav, deleteFesOrder} = require('../controllers/festivalsController')
const { getAllThemes, createThemes,  getOneThemes, deleteThemes, updateThemes, deleteThemeFav, deleteThemeOrder } = require('../controllers/themesController')
const {getAdmin} = require('../controllers/adminController')
const {createGiveAway, getAllGiveAway, removeAllGive} = require('../controllers/giveController')
const {createFav, getAllFav, checkFav, removeFav} = require('../controllers/favController')
const {createOrder, getAllOrder, checkOrder, removeOrder, getAdminOrder, getOneOrder} = require('../controllers/orderController')

router.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
        methods:"GET,POST,PUT,DELETE"
    }))

// end points

//getAdmin
// router.post('/Admin', createAdmin)
router.post('/Admin', getAdmin)
// router.post('/Admin/logout', logoutAdmin)

//AllUser
router.get('/All/Users' , getAll)   
router.get('/All/Users/getOne/:userId' , getOne)   
router.delete('/All/Users/removeOne/:userId' , deleteUser)   
router.delete('/Clear/favorite/:userId', deleteUserFav)
router.delete('/Clear/order/:userId', deleteUserOrder)

//Accessories
router.post('/Add/Accessories/create', createAccessories)
router.get('/Add/Accessories', getAllAccessories)
router.get('/Add/Accessories/:userId', getOneAccessories)
router.delete('/Add/Accessories/remove/:userId', deleteAccessories)
router.put('/Add/Accessories/update/:userId', updateAccessories)
// router.post("/Add/Accessories/create/upload-image",, uploadImage)
router.delete('/clear/Accessories/fav/:productId', deleteAccessFav)
router.delete('/clear/Accessories/order/:productId', deleteAccessOrder)

//Brands
router.post('/Add/Brands/create', createBrands)
router.get('/Add/Brands', getAllBrands)
router.get('/Add/Brands/:userId', getOneBrands)
router.delete('/Add/Brands/remove/:userId', deleteBrands)
router.put('/Add/Brands/update/:userId', updateBrands)
router.delete('/clear/Brands/fav/:productId', deleteBrandFav)
router.delete('/clear/Brands/order/:productId', deleteBrandOrder)

//Festivals
router.post('/Add/Festivals/create', createFestivals)
router.get('/Add/Festivals', getAllFestivals)
router.get('/Add/Festivals/:userId', getOneFestivals)
router.delete('/Add/Festivals/remove/:userId', deleteFestivals)
router.put('/Add/Festivals/update/:userId', updateFestivals)
router.delete('/clear/Festivals/fav/:productId', deleteFesFav)
router.delete('/clear/Festivals/order/:productId', deleteFesOrder)

//Themes
router.post('/Add/Themes/create', createThemes)
router.get('/Add/Themes', getAllThemes)
router.get('/Add/Themes/:userId', getOneThemes)
router.delete('/Add/Themes/remove/:userId', deleteThemes)
router.put('/Add/Themes/update/:userId', updateThemes)
router.delete('/clear/Themes/fav/:productId', deleteThemeFav)
router.delete('/clear/Themes/order/:productId', deleteThemeOrder)

//GiveAway
router.post('/giveaway', createGiveAway)
router.get('/giveaway/getAll', getAllGiveAway)
router.delete('/giveAway/removeAll', removeAllGive)

//Favorite
router.post('/addfavorite', createFav)
router.get('/getFav/:productId/:userId', checkFav)
router.get('/favorite/getAll/:userId', getAllFav)
router.delete('/removeFav/:productId/:userId', removeFav)

//Order
router.post('/addorder', createOrder)
router.get('/getOrder/:productId/:userId', checkOrder)
router.get('/order/getAll/:userId', getAllOrder)
router.get('/order/getOne/:productId', getOneOrder)
router.get('/order/deliver', getAdminOrder)
router.delete('/removeOrder/:productId/:userId', removeOrder)

module.exports = router