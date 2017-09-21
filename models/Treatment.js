const TreatmentComponent = require('./schema/TreatmentComponent');
const Comment            = require('./schema/Comment');
const Rating            = require('./schema/Rating');
const mongoose           = require('mongoose');
const validator          = require('validator');
const Schema             = mongoose.Schema;
const roundTo            = require('round-to');





/*
	Schema
 */
const treatmentSchema = new Schema ({

	name: {
		type: String,
		unique: true,
		trim: true
	},
	description: {
		type: String
	},
	precautions: {
		type: String
	},
	date_created: {
		type: Date, 
		default: Date.now
	},
	relatedCondition: {
		type: Schema.Types.ObjectId,
		required: true
	},
	cost: {
		type: Number
	},
	//Array of treatment components.  Schema for this is contained in ./schema/TreatmentComponent.js
	treatmentComponents: [TreatmentComponent],
	//array of comment components.
	comments: [Comment],
	//Rating
	ratings: [Rating],
	is_verified: {
		type: Boolean,
		default: false
	}

});

//in order for the queries to return virtuals, you must set virtual options to return on the schema for JSON and for objects.
treatmentSchema.set('toObject', {virtuals: true});
treatmentSchema.set('toJSON', {virtuals: true});

/*
	Set a virtual property to add all ratings.
 */
treatmentSchema.virtual('averageRating').get(function () {
	// return this.ratings.length;
	var ratings = this.ratings;
	var length  = ratings.length;

	if( length > 0 ) {
		var ratingAverage = ratings.reduce((sum, inidividualRating) => {
			return sum + inidividualRating.rating;
		}, 0) / length;
		ratingAverage = roundTo(ratingAverage, 2);
		return ratingAverage;
	} else {
		return;
	}

});

treatmentSchema.virtual('numRatings').get(function () {

	return this.ratings.length;

});




// Create the model class
const ModelClass = mongoose.model('treatment', treatmentSchema);


//Export the model
module.exports = ModelClass;