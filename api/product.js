
const express = require('express');
const router = express.Router();
const con = require('../mySqlConnection');

router.get('/', async (req, res, next) => {
    const result = await con.getProductRow();
    res.send(result);
    res.end();
});
module.exports = router;