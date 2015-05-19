var models = require('../models/models.js');

// GET /quizes/statistics
exports.statistics = function(req, res) {	
	var quiz = req.quiz;
	res.render('quizes/statistics',{quiz: quiz,  errors: []});
};

