const express = require('express')
// Modular router for /notes
const notesRouter = require('./notes')

const app = express()
app.use('/notes', notesRouter)

module.exports = app
