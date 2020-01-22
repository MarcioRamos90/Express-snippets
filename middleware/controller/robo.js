const express = require("express");
const route = express.Router()

route.get("/", (req, res, next) => {
    console.log('1', req.query)

    req.responses = 'hello world'
    next()
})

route.get("/", (req, res, next) => {
    console.log('2', req.query)

    res.json(req.responses)
})

module.exports = route