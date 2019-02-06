const greeting = require('greeting')

module.exports = (req, res) => res.send(`<!DOCTYPE html><h1>${greeting.random()} World!</h1>`)
