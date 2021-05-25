const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes.js')

const app = express()
const server = require('http').Server(app)

const connectedUsers = {}

mongoose.connect('mongodb+srv://nodejs:nodejs@cluster0.kxpnq.mongodb.net/notebook?retryWrites=true&w=majority', {
    useNewUrlParser: true   
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)