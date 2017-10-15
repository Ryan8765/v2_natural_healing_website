const bcrypt    = require('bcrypt-nodejs');
const mongoose  = require('mongoose');
const validator = require('validator');
const Schema    = mongoose.Schema;



/*
	Validation functions
 */
function validateEmail( email ) {
	return validator.isEmail( email );
}


/*
	Validate Password
 */
function validatePassword( password ) {
	return !validator.isAlpha(password) && validator.isLength(password, {min: 6, max: 40}) && !validator.isNumeric(password);
}

/*
	Validate username
 */
function validateUsername( username ) {
	return !validator.isEmpty(username);
}


/*
	Schema
 */

// Define our model
const userSchema = new Schema({
	//email must be unique and make sure it is lowercase
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
		validate: {
			validator: validateEmail,
			message: 'Must be a valid email address.'
		}
	},
	password: {
		type: String
		// validate: {
		// 	validator: validatePassword,
		// 	message: 'Password must have 6 characters and contain numbers and letters.'
		// }
	},
	//used in URL when a user needs to reset their password
	passwordResetToken: {
		type: String
	},
	username: {
		type: String,
		unique: true,
		validate: {
			validator: validateUsername,
			message: 'Username must not be blank.'
		}
	},
	usersecret: String,
	date_created: {type: Date, default: Date.now},
	is_verified: { type: Boolean, default: false },
	is_active: {type: Boolean, default: false},
	failed_attempts: {type: Number, default: 0}
});

//On Save hook, encrypt password
userSchema.pre('save', function (next) {
	const user = this;
	bcrypt.genSalt(10, function (err, salt) {
		if(err){return next(err);}

		bcrypt.hash(user.password, salt, null,  function (err, hash) {
			if(err){return next(err);}
			user.password = hash;
			next();
		});
	});
});


//in a user schema - methods is a function that is available on the User class anywhere in the application.  This one compares password in post with the password in the database.
userSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) {return callback(err);}
		callback(null, isMatch);
	});
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema);


//Export the model
module.exports = ModelClass;
