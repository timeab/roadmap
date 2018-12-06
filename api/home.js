const express = require('express');
const router = express.Router();
const con = require('../mySqlConnection');
//Home
router.get('/', async (req, res, next) => {
    const result = await con.getProductRow();
    res.status(200).type("text/plain");
    res.send(result);
    res.end();
});
// const test = new doConnection();

module.exports = router;