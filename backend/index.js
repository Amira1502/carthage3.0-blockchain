// require express
const express = require('express')

// instance of express methods
const app = express()

// require and configure dotenv
require('dotenv').config()

// require connectio DB
const connectDB = require('./config/connectDB')
connectDB()

// Middleware bodyparser (express json)
const bodyParser = require("body-parser");
app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


const cors = require('cors')
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// import route 
app.use('/user', require('./routes/user')) 

 
app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

// create server
const PORT = process.env.PORT
app.listen(PORT, error => error ? console.error(`can not connect to server : ${error}`)
    : console.log(`Server is running on http://localhost:${PORT} ....`)
)