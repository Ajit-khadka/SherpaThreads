const express = require('express')
const cors = require('cors')
const router = express.Router()
const {getAll, getOne, deleteUser} = require('../controllers/userControllers')

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

module.exports = router