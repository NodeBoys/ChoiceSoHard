var express = require('express');
var router = express.Router();

var test = require('./test');
var getdata = require('./getdata');

router.route('/')
	.get(test.first);

router.route('/gettaipei')
	.get(getdata.taipei);

module.exports = router;
