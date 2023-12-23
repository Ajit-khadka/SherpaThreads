const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
require('./db/connection')


//middleware
app.use(express.json())
app.use('/', require('./routes/authRoutes'))

const PORT = 8000;
app.listen(PORT, () => console.log(`The server is running on Port ${PORT}`))