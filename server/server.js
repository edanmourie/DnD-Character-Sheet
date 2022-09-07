const express = require('express')
const path = require('path')

const characterRoutes = require('./routes/characters')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', characterRoutes)

module.exports = server
