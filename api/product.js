
const express = require('express');
const router = express.Router();
const con = require('../mySqlConnection');


router.get('/', async (req, res, next) => {
    const result = await con.getProductRow();
    res.status(200).type("application/json");
    res.send(result);
    res.end();
});
module.exports = { path: '/product', handler: router };