var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/choiceSoHard');
var test = db.collection('test');

module.exports = {
	test: test
};