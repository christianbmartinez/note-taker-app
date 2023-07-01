// Packages needed for our api
const notes = require('express').Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils')
const { v4: uuidv4 } = require('uuid')

// GET API Route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

// POST API Route for creating a new note
notes.post('/', (req, res) => {
  if (req.body) {
    const { title, text } = req.body

    const newNote = {
      title,
      text,
      // uuid generates a unique id for each note
      id: uuidv4(),
    }

    readAndAppend(newNote, './db/db.json')
    res.json({ success: true, text: 'Successfully added new note' })
  } else {
    res.json({ success: false, text: 'Failed to add new note' })
  }
})

// DELETE API Route to delete a note
notes.delete('/', (req, res) => {
  console.log(req.body)
})

module.exports = notes
