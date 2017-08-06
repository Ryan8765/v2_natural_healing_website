const mongoose  = require('mongoose');
const Treatment = require('../models/Treatment');


/*
	Create a comment.
 */
exports.create =  (req, res, next) => {
	var { relatedTreatment, comment } = req.body;
	//get user from request - passed by passport as this is a protected route.
	var user         = req.user;
	var userObjectID = mongoose.Types.ObjectId(user._id);
	var username     = user.username;

	if( !relatedTreatment ) return res.status(422).send({error: 'Not a valid treatment.  Please refresh and try again.2'});
	if( !comment ) return res.status(422).send({error: 'A comment is required!'});

	Treatment.findOne({_id: relatedTreatment},(err, existingTreatment) => {
		//if error connecting to database - return error
		if(err) {return res.status(422).json({error: 'Not a valid treatment.  Please refresh and try again.2'})};

		existingTreatment.comments.unshift({
			relatedUser: userObjectID,
			username: user.username,
			comment
		});

		existingTreatment.save((err) => {
			//if error connecting to database - return error
			if(err) {return next(err);}
			return res.status(200).json({
				success: true,
				comments: existingTreatment.comments
			});
		});
	});


};
