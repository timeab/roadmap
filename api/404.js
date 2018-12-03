const express = require('express');
const router = express.Router();

//Other Path
router.get('*', (req, res, next) => {
    res.status(404).type("text/plain");
    res.send('404! Page not found !')
    res.end();
});
module.exports = router;
