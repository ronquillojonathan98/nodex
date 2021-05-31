module.exports = async (req, res, next) => {
    const person = req.body

    if(person.age < 20) {
        res.status(400).send('underage')
    } else {
        next()
    }
}