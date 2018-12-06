const express = require('express');
const home = require('./api/home');
const notFound = require('./api/404');
//const mySqlCon = require('./mySqlConnection');


const app = express();

app.use('/', home);
//app.use('/ss', mySqlCon);
app.use('*', notFound);

module.exports = app;