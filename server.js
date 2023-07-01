const express = require('express')
const path = require('path')
const app = express()
const api = require('./routes/index.js')
const PORT = 5000

// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', api)
// GET request for the home page sends index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})
// GET request for the notes page sends notes.html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})
// Listen on the port specified
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
