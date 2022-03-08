const express = require('express')
const routers = require('./routes')
const createError = require('http-errors')

const app = express()

app.use(express.json({ limit: '4MB' }))
app.use(express.urlencoded({ extended: false }))

app.use('/romannumeral', routers.romanNumeral)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send(
    createError(404, 'Not Found')
  )
})

app.use(function (req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message
  // res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(500).end()
})

module.exports = app
