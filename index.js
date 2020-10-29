const express = require('express')
const app = express()
const port = 3000

// endpoint test:
app.get('/', (req,res) => res.send("Hello readers!"))

app.listen(port, () => console.log("Backend server runnning on 3000"))