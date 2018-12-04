const express = require('express');
const router = express.Router();

//Home
router.get('/', (req, res, next) => {
    res.status(200).type("text/plain");
    res.send('Hello World!');
    res.end();
});

module.exports = router;