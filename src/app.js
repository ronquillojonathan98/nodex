'use strict';
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const routes = require('./routes')

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()
const port = process.env.PORT || 2021

app.use(express.static(publicPath))
app.use(routes)

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)

app.listen(port, () => console.log(`Listening on port ${port}`))