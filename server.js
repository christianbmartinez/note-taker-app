const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.json({ hello: 'This is the home page.' })
})

app.listen(PORT, console.log(`Server running on port ${PORT}`))
