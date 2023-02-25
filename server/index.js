require('dotenv').config()

const PORT = process.env.PORT || 5000

const express = require('express')
const app = express()
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const routes = require('./routes/index')
const fileUpload = require('express-fileupload')
const path = require('path')
const error = require('./middleWare/errorHandlerMiddleWare')

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname, "static")))
app.use('/api', routes)



app.use(error)

const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () =>{
            console.log(`server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
}

start()