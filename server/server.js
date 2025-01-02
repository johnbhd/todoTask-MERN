require('dotenv').config() // CALLING THE ENV FOR PRIVATE FILE PORT
const mongoose = require('mongoose')
const express = require('express') // you call express
const cors = require('cors')

const todoRoutes = require('./routes/todo')

//app
const app = express()

// cors
app.use(cors())

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/todo', todoRoutes)

// connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
            // you just starting server 
        app.listen(process.env.PORT, () => {
            console.log('connected to db listening on portd', process.env.PORT)
        })
    })

    .catch((error) => {
        console.log(error)
    })
