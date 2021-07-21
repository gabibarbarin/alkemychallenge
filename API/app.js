require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

app.use('/', require('./routes/operations'))
app.use('/', require('./routes/auth'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`http://localhost:${port}`))