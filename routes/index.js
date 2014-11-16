var express = require('express');
var router = express.Router();

var test = require('./test');

router.route('/')
	.get(test.first);

module.exports = router;
