require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())

app.use(express.json())

app.use('/', require('./routes/operations'))
app.use('/', require('./routes/auth'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`http://localhost:${port}`))