/*
	This is a Rating Schema
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RatingSchema = new Schema ({
	relatedUser: {
		type: Schema.Types.ObjectId,
		required: true
	},
	rating: {
		type: Number,
		required: true
	},
	date_created: {
		type: Date, 
		default: Date.now
	}
});


module.exports = RatingSchema;