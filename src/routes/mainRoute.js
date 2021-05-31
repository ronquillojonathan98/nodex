'use strict'
const express = require('express')
const router = express.Router()
const Person = require('../models/person')
const auth = require('../middlewares/auth')
const axios = require('axios')

router.get('', async(req, res) => {
    res.status(200).send(`This is the main page`)
})

router.get('/persons', async(req, res) => {
    res.status(200).send(await Person.find())
})

router.post('/create', auth, async(req, res) => {
    try {
        const person = await new Person(req.body)
        person.save()
        res.send(person)
    } catch (e) {
        res.status(401).send(e)
    }
})

router.patch('/update-person/:_id', async(req, res) => {
    try {
        const { _id } = req.params
        const person = await Person.findByIdAndUpdate(_id , req.body, {new: true})
        res.status(200).send(person)
    } catch (e) {
        res.status(401).send(e)
    }
})

router.delete('/delete/:_id', async(req, res) => {
    try {
        const { _id } = req.params
        const person = await Person.findByIdAndDelete(_id)
        res.status(200).send({
            msg: 'successfully delete record of a person',
            person
        })
    } catch (e) {
        res.status(401).send(e)
    }
})

router.delete('/delete-all', async(req, res) => {
    try {
        const persons = await axios.get(`${host}${port}/persons`).then(response => {
            return response.data
        })

        persons.forEach(async(person) => {
            const { _id } = person
            await Person.findByIdAndDelete(_id)
        })
        
        res.status(200).send(persons)
    } catch (e) {
        res.status(401).send(e)
    }
})

router.get('*', async(req, res) => {
    res.status(404).send('Page not found.')
})

module.exports = router