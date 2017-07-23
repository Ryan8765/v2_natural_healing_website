/*
	This is a treatment item schema.  This is contained within a treatment (basically a related treatment component)
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TreatmentComponentSchema = new Schema ({
	name: String,
	brandName: String,
	dosage: String,
	cost: {
		type: Number,
		set: setCostFormat
	},
	notes: String,
	date_created: {
		type: Date, 
		default: Date.now
	}

});



/*
	Function used to make sure the cost of a treatment component is in the correctg format before saving to the db.
 */
function setCostFormat( cost ) {
	return  Math.ceil(cost * 100) / 100;
}

module.exports = TreatmentComponentSchema;