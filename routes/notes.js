const notes = require('express').Router()
//const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
//const { v4: uuidv4 } = require('uuid')

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  console.log(req.body)
})

// POST Route for creating a new note
notes.post('/', (req, res) => {
  console.log(req.body)
})

// DELETE Route to delete a note
notes.delete('/', (req, res) => {
  console.log(req.body)
})

module.exports = notes
