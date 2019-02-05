const express = require('express')
const home = require('./home')

const app = express()
app.get('/', home)
app.listen(8080)
