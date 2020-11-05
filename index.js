const express = require('express')
const endpoints = require('./src/web/endpoints.js')

const app = express()
const PORT = 3000

app.use('/', endpoints)
app.use(express.json())

app.listen(PORT, () => console.log(`Backend server running on ${PORT}`))