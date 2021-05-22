'use strict';
const express = require('express')
const router = express.Router()

router.get('', (req, res) => 
{
    res.render('index', 
    {
        title: req.query.title,
    })
})

router.get('/about', (req, res) => 
{
    res.send({
        name: 'Jonathan',
        age: 23
    })
})

router.get('*', (req,res) => 
{
    res.send('404 Page Not Found')
})

module.exports = router