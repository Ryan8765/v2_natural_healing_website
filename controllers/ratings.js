const Treatment = require('../models/Treatment');
const mongoose  = require('mongoose');
const Ratings   = require('../helpers/Ratings');

/**
 *	Ratings controllers	
 */

exports.create =  (req, res, next) => {

	var { rating, relatedTreatment } = req.body;
	var ratingIsNumeric = !isNaN(rating);
	rating = Number(rating);

	if( rating === undefined ) return res.status(422).send({error: 'Not a valid rating.'});

	if( !(ratingIsNumeric && rating <= 10 && rating >= -1) ) {
		return res.status(422).send({error: 'Not a valid number.  Must be a rating between 0 and 10.'});
	}


	//get user from request - passed by passport as this is a protected route.
	var user         = req.user;
	var userObjectID = mongoose.Types.ObjectId(user._id);

	if( !relatedTreatment ) return res.status(422).send({error: 'Not a valid treatment.  Please send a valid treatment ID.'});


	Treatment.findOne({_id: relatedTreatment},(err, existingTreatment) => {
		//if error connecting to database - return error
		if(err) {return res.status(422).json({error: 'Not a valid Treatment, please try again.'})};

		//check to make sure user hasn't rated this before
		var existingRating = existingTreatment.ratings.filter(( rating ) => {
			return rating.relatedUser.toString() === userObjectID.toString();
		});

		//create ratings object
		var currentRatings = new Ratings(existingTreatment.ratings);

		//if there is an existing rating by this user - update that, else create new ratting
		if( existingRating.length > 0 ) {
			var userRating = existingTreatment.ratings.id( existingRating[0]._id );


			//if user is trying to clear their rating with a null value (-1) - remove the users rating from the treatment
			if( rating === -1 ) {
				userRating.remove();
				existingTreatment.save((err) => {
					//if error connecting to database - return error
					if(err) {return next(err);}
					return res.status(200).json({
						success: true,
						ratingsAverage: currentRatings.getAverage(),
						numRatings: currentRatings.getNumberRatings()
					});
				});
			} else {
				//if user changed their rating to a valid rating 0-10 - update the rating.
				userRating.rating = rating;
				existingTreatment.save((err) => {
					//if error connecting to database - return error
					if(err) {return next(err);}
					return res.status(200).json({
						success: true,
						ratingsAverage: currentRatings.getAverage(),
						numRatings: currentRatings.getNumberRatings()
					});
				});
			}			
		} else {

			existingTreatment.ratings.push({
				relatedUser: userObjectID,
				rating
			});

			var currentRatings = new Ratings(existingTreatment.ratings);


			existingTreatment.save((err) => {
				//if error connecting to database - return error
				if(err) {return next(err);}
				return res.status(200).json({
					success: true,
					ratingsAverage: currentRatings.getAverage(),
					numRatings: currentRatings.getNumberRatings()
				});
			});
		}
		
	});
};




