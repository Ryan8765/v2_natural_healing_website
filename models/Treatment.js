const TreatmentComponent = require('./schema/TreatmentComponent');
const mongoose           = require('mongoose');
const validator          = require('validator');
const Schema             = mongoose.Schema;


/*
	Used to force a null setting on rating before saved to database
 */
function setInitialRating (value) {
	return null;
}


/*
	Schema
 */
const treatmentSchema = new Schema ({

	name: {
		type: String,
		unique: true,
		lowercase: true,
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
		type: String,
		required: true
	},
	cost: {
		type: Number
	},
	rating: {
		type: Number,
		set: setInitialRating
	},
	//Array of treatment components.  Schema for this is contained in ./schema/TreatmentComponent.js
	treatmentComponents: [TreatmentComponent],
	is_verified: {
		type: Boolean,
		default: false
	}

});



// Create the model class
const ModelClass = mongoose.model('treatment', treatmentSchema);


//Export the model
module.exports = ModelClass;