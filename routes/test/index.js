var models = require('../../models');

module.exports.first = function (req, res, next){
	models.test.find({}, function (err, docs){
		console.log(docs);
		res.send(docs);
	});
};