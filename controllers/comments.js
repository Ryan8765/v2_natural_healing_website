const mongoose  = require('mongoose');
const Treatment = require('../models/Treatment');
const Comment   = require('../models/schema/Comment');


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



/*
	Update a comment.
 */
exports.updateComment = ( req, res, next ) => {
	var { relatedComment, relatedTreatment, updatedComment } = req.body;
	var commentObjectID = mongoose.Types.ObjectId(relatedComment);

	//get user from request - passed by passport as this is a protected route.
	var user         = req.user;
	var userObjectID = mongoose.Types.ObjectId(user._id);

	if( !relatedComment ) return res.status(422).send({error: 'Not a valid comment.  Please send a valid comment ID.'});	


	Treatment.findOne({_id: relatedTreatment},(err, existingTreatment) => {
		//if error connecting to database - return error
		if(err) {return res.status(422).json({error: 'Not a valid Treatment, please try again.'})};

		//get comment from treatment.  Mongoose allows you to find embedded documents of schema (comments) with the method "id" shown below.
		var existingComment = existingTreatment.comments.id( commentObjectID );

		if( !existingComment ) {
			return res.status(422).send({error: 'Comment could not be found'});
		}


		if( existingComment.relatedUser.toString() !== userObjectID.toString() ) {
			return res.status(422).send({error: 'Invalid user.'});
		}

		//update existin comment
		existingComment.comment = updatedComment;

		//save the existing treatment
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

/*
	Delete a comment
 */

exports.delete = (req, res, next) => {
	console.log( "this ran " );
	var { relatedComment, relatedTreatment } = req.body;
	var commentObjectID = mongoose.Types.ObjectId(relatedComment);

	//get user from request - passed by passport as this is a protected route.
	var user         = req.user;
	var userObjectID = mongoose.Types.ObjectId(user._id);

	if( !relatedComment ) return res.status(422).send({error: 'Not a valid comment.  Please send a valid comment ID.'});	


	Treatment.findOne({_id: relatedTreatment},(err, existingTreatment) => {
		//if error connecting to database - return error
		if(err) {return res.status(422).json({error: 'Not a valid Treatment, please try again.'})};

		//get comment from treatment.  Mongoose allows you to find embedded documents of schema (comments) with the method "id" shown below.
		var existingComment = existingTreatment.comments.id( commentObjectID );

		if( !existingComment ) {
			return res.status(422).send({error: 'Comment could not be found'});
		}


		if( existingComment.relatedUser.toString() !== userObjectID.toString() ) {
			return res.status(422).send({error: 'Invalid user.'});
		}

		//remove existing comment
		existingTreatment.comments.pull( commentObjectID );


		//save the existing treatment
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



/*
	Create like.
 */
exports.createLike = (req, res, next) => {

	var { relatedComment, relatedTreatment } = req.body;
	var commentObjectID = mongoose.Types.ObjectId(relatedComment);

	//get user from request - passed by passport as this is a protected route.
	var user         = req.user;
	var userObjectID = mongoose.Types.ObjectId(user._id);

	if( !relatedComment ) return res.status(422).send({error: 'Not a valid comment.  Please send a valid comment ID.'});


	Treatment.findOne({_id: relatedTreatment},(err, existingTreatment) => {
		//if error connecting to database - return error
		if(err) {return res.status(422).json({error: 'Not a valid Treatment, please try again.'})};

		//get comment from treatment.  Mongoose allows you to find embedded documents of schema (comments) with the method "id" shown below.
		var existingComment = existingTreatment.comments.id( commentObjectID );

		if( !existingComment ) {
			return res.status(422).send({error: 'Comment could not be found'});
		}

		//check comment for a like by this particular user
		if( existingComment.likes ) {
			//filter likes to show only those by this user
			var existingUserLikesForComment = existingComment.likes.filter(( like ) => {
				return like.relatedUser.toString() === userObjectID.toString();
			});

			//if there are likes for this comment by this user - return error.
			if( existingUserLikesForComment.length > 0 ) {
				return res.status(422).send({error: 'User already liked comment.'});
			}

			//else add like
			existingComment.likes.push({
				relatedUser: userObjectID
			});

			existingTreatment.save((err) => {
				//if error connecting to database - return error
				if(err) {return next(err);}
				return res.status(200).json({
					success: true,
					comments: existingTreatment.comments
				});
			});

		}
		
	});
};



