const express = require('express');
const home = require('./api/home');
const notFound = require('./api/404');
const product = require('./api/product');
const app = express();

app.use('/', home);
app.use('/product', product);
app.use('*', notFound);

module.exports = app;