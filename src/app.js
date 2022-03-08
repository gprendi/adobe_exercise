/**
 * Driver code for http server
 * @namespace App
 */

const express = require('express');
const createError = require('http-errors');

const routers = require('./routes');

/**
 * @typedef {Object} App;
 * @description Express Object
 * @memberof App
 */
const app = express();

app.use(express.json({ limit: '4MB' }));
app.use(express.urlencoded({ extended: false }));

app.use('/romannumeral', routers.romanNumeral);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404).send(createError(404));
});

app.use(function (req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message
    // res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(500).end();
});

module.exports = app;
