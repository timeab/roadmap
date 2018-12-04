const express = require('express');
const home = require('./api/home');
const notFound = require('./api/404');


const app = express();

app.use('/', home);
app.use('*', notFound);

module.exports = app;