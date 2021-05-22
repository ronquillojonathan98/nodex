'use strict';
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const routes = require('./routes')

const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()

app.use(express.static(publicPath))
app.use(routes)

app.set('view engine', 'hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)


app.listen(2021, () => console.log('Listening on port 2021.'))