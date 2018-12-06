const express = require('express');
const app = express();
const pathHandler = require('./handlers/pathHandler');


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