const Condition = require('../models/Condition');
const Treatment = require('../models/Treatment');
const mongoose  = require('mongoose');
const Ratings   = require('../helpers/Ratings');

/**
 * 	Functionality for CRUD conditions model
 */


exports.create =  (req, res, next) => {

	//check for necessary params to create a condition.
	var { condition, description } = req.body;
	condition = condition.toLowerCase().trim();

	console.log( condition );
	if( !condition || !description ) {

		return res.status(422).send({error: 'Condition and description must be provided!'});
	}


	/*
		Check to make sure condition doesn't already exist
	 */
	Condition.findOne({condition},(err, existingCondition) => {
		//if error connecting to database - return error
		if(err) {return res.status(422).json({error: 'Error - Please try again later.'})};

		//If a user with an email does exist, return an error
		if(existingCondition) {
			return res.status(422).json({error: 'Condition already exists!'});
		}

		const newCondition = new Condition({
			condition,
			description
		});

		newCondition.save((err) => {
			//if error connecting to database - return error
			if(err) {return next(err);}
			return res.status(200).json({success: true});
		});
	});


};




exports.getAll =  ( req, res, next ) => {
	var query = Condition.find({is_verified: true}).select('_id condition');

	query.exec(function(err, conditions) {
		if(err) return next(err);
		res.status(200).json(conditions);
	});

};



exports.getTreatments = ( req, res, next ) => {
	var { conditionID } = req.params;
	//when searching via aggregate - must turn ID into an objectid. 
	conditionID = mongoose.Types.ObjectId(conditionID);

	Condition.aggregate([
		{ $project : { condition : 1 } },
    	{
		    $lookup:
		        {
			        from: "treatments",
			        localField: "_id",
			        foreignField: "relatedCondition",
		          	as: "treatments"
		        },
	   },
	   { $match : { _id: conditionID } }
	], (err, result) => {

		if(err) return next(err);

		//get the average for each treatment.  Place for possible improvement in the future.  Save time by getting MongoDB to do the calcs. 
		var treatments = result[0].treatments.map((treatment) => {
			var rating = new Ratings( treatment.ratings );
			rating = rating.getAverage();
			treatment.rating = rating;
			return treatment;
		});

		result[0].treatments = treatments;

		res.status(200).json(result[0]);
	});
};