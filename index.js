const express = require('express')
const bodyParser = require('body-parser')
const mainRoute = require('./src/web/routes/main.js')
// const userRoute = require('./src/web/routes/user.js')
// const bookRoute = require('./src/web/routes/books.js')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', mainRoute)
// app.use('/user', userRoute)
// app.use('/book', bookRoute)

app.listen(PORT, () => console.log(`Backend server running on ${PORT}`))