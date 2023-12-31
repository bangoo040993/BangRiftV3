const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon');
app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(express.static('public'))

// what does this code do how do i serve this for dev mode?
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

module.exports = app