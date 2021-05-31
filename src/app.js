'use strict'
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const hbs = require('hbs')
const mainRoute = require('./routes/mainRoute')

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const databaseName = "nodex"
const stringConnection = `mongodb://127.0.0.1:27017/${databaseName}`
const port = process.env.PORT || 2021
const app = express()

global.port = port
global.host = "http://127.0.0.1:"

mongoose.connect(stringConnection, { useNewUrlParser: true, useUnifiedTopology: true })

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.set(express.static(publicPath))
app.use(express.json())
app.use(mainRoute)

app.listen(port, () => console.log(`Listening on port ${port}`))