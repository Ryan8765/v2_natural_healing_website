/*
	This is a comment schema.  This is contained within a treatment (basically a related treatment component)
 */
const mongoose = require('mongoose');
const Like  = require('./Like');


const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
	relatedUser: {
		type: Schema.Types.ObjectId,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	date_created: {
		type: Date, 
		default: Date.now
	},
	likes: [Like]
});


module.exports = CommentSchema;