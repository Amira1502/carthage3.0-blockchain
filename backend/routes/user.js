// require express
const express = require('express')
//routes
const router = express.Router()

//require controller
const { signup} = require('../controllers/user')


//router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router