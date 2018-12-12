const express = require('express');
const app = express();
const pathHandler = require('./handlers/pathHandler');
var cors = require('cors');

app.use(cors());
// Mounting the middleware function at the specified path;
// if the path is equal to * then setTimeout() to have the rest of the path rendered last

pathHandler().then(path =>
    path.forEach((elem) => {
        const comp = require(`./api/${elem}`);
        if (comp.path === '*') {
            setTimeout(() => app.use(comp.path, comp.handler));
        } else {
            app.use(comp.path, comp.handler);
        }

    }));

module.exports = app;