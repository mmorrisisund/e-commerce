const path = require('path')

const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')

const createApiRoutes = require('./api')
const errorHandler = require('./middleware/errorHandler')

dotenv.config()
const app = express()
const db = mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to MongoDb...'))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

createApiRoutes(app)

app.use(errorHandler)

module.exports = app
