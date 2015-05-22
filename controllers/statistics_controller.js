var models = require('../models/models.js');

// GET /quizes/statistics
exports.statistics = function(req, res, next) {	
	var comentadas = 0;
	var no_comentadas = 0;
	var nmc = 0;
	models.Quiz.findAll().then(function(quizes) {
		models.Comment.findAll().then(function(comments) {
			nmc=comments.length/quizes.length;
			for (var i = 0; i < quizes.length; i++) {
				var c = false;
				for (var j = 0; j < comments.length; j++) {
					if(quizes[i].id == comments[j].QuizId){
						c=true;
					}
				}
				if(!c){
					no_comentadas++;
				}
			}
			comentadas = quizes.length - no_comentadas;

			res.render('quizes/statistics',{quizesLong: quizes.length, commentsLong: comments.length,
				  comentariosMedios: nmc, preguntasSinComent: no_comentadas, 
					preguntasConComent: comentadas,errors: []});

		}).catch(function(error){next(error)});
	}).catch(function(error){next(error)});
														
};

