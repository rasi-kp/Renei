var express = require('express');
var router = express.Router();

const { success,cards} = require('../controller/controller')

/* GET home page. */
router.get('/', success)
router.get('/cards',cards)


module.exports = router;
