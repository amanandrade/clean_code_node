const express = require('express')
const bodyParser = require('body-parser')
const mainRoute = require('./src/web/routes/main.js')
const database = require('./src/database/mongoDB/connection.js')
// const userRoute = require('./src/web/routes/user.js')
// const bookRoute = require('./src/web/routes/books.js')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', mainRoute)
// app.use('/user', userRoute)
// app.use('/book', bookRoute)

database.connect().then(() => {
    app.listen(PORT, () => console.log(`Backend server running on ${PORT}`))
})

//some references:
//https://github.com/hmschreiner/node-mongoose
//https://mannhowie.com/clean-architecture-node
//https://github.com/royib/clean-architecture-node