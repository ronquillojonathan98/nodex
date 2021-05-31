'use strict'
const {Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')

const personSchema = Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    addr: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true,
    }
})

personSchema.pre('save', async function(next) {
    const person = this
    person.password = await bcrypt.hash(person.password, 8)
    next()
})

personSchema.post('save', async function() {
    console.log('person has been created')
})

const Person = new model('person', personSchema)

module.exports = Person