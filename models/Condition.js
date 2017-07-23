const mongoose  = require('mongoose');
const validator = require('validator');
const Schema    = mongoose.Schema;




/*
	Schema
 */
const conditionSchema = new Schema ({

	condition: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true
	},
	description: {
		type: String
	},
	date_created: {
		type: Date, 
		default: Date.now
	},
	is_verified: {
		type: Boolean,
		default: false
	}

});



// Create the model class
const ModelClass = mongoose.model('condition', conditionSchema);


//Export the model
module.exports = ModelClass;