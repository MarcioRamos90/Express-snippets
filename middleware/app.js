const express = require("express");
const app = express()

const robo = require('./controller/robo')

app.use('/robo', robo)

module.exports = app