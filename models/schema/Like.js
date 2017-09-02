/*
	This is a Like schema
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LikeSchema = new Schema ({
	relatedUser: {
		type: Schema.Types.ObjectId,
		required: true
	},
	date_created: {
		type: Date, 
		default: Date.now
	}
});


module.exports = LikeSchema;