const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())

app.use(express.static(path.resolve(__dirname, '../public/dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'))
})

module.exports = app
