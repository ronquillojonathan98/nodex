'use strict';
const { appendFileSync, writeFileSync } = require('fs');
const path = require('path');
const express = require('express');
const routes = require('./routes');
const hbs = require('hbs');

const app = express();

const publicPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicPath));

app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

new routes(app);

app.listen(2021, () => 
{
    console.log('Server is up, now listening on port 2021');
});