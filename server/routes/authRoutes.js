const express = require('express')
const cors = require('cors')
const router = express.Router()
const {test} = require('../controllers/authControllers')

router.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
        methods:"GET,POST,PUT,DELETE"
    }))

module.exports = router