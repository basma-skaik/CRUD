const express = require('express');
const userRoute = require('./routes/userRoute')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.use('/user', userRoute)

module.exports = app;