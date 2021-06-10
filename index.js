const express = require('express')
const mainRoute = require('./src/gateways/web/routes/main.js')
const database = require('./src/gateways/database/mongoDB/connection.js')
const userRoute = require('./src/gateways/web/routes/user.js')
// const bookRoute = require('./src/web/routes/books.js')

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))

app.use('/', mainRoute)
app.use('/user', userRoute)
// app.use('/book', bookRoute)

app.listen(PORT, () => console.log(`Backend server running on ${PORT}`))

//some references:
//https://github.com/hmschreiner/node-mongoose
//https://mannhowie.com/clean-architecture-node
//https://github.com/royib/clean-architecture-node