const User            = require('../models/user');
const jwt             = require('jsonwebtoken');
const config          = require('../config/config');
const randtoken       = require('rand-token');
const validator       = require('validator');
const Email           = require('../services/email');
const VerifyEmailBody = require('../email_templates/verify_email');


// function tokenForUser(user) {
// 	const timestamp = new Date().getTime();
// 	return jwt.encode({ sub: user.usersecret, iat: timestamp }, config.secret);
// }

/**
 * Used to create user token.
 * @param  {[object]} user [user object from db]
 * @return {[string]}      [jwt token]
 */
function generateToken( user ) {
	const usersecret = user.usersecret;
	const id = user.id;

	const payload = {
		usersecret,
		id
	};

	//respond with a token that expires in two hours
	return jwt.sign(payload, config.secret, { expiresIn: 2 * 60 * 60 });
}


exports.signup = function(req, res, next) {
	//check to make sure that an appropriate account type was supplied in the URL ("doctor" or "genUser")
	if( req.params.accountType !== "doctor" && req.params.accountType !== "genUser"  ) {
		return res.status(422).send({error: 'Invalid account type.'});
	}

	const email    = req.body.email;
	const password = req.body.password;
	const username = req.body.username;

	if(!email || !password) {
		return res.status(422).send({error: 'Must provide email and password'});
	}

	//See if a user with a given email or username exists
	User.findOne({$or: [{email}, {username}]},(err, existingUser) => {
		//if error connecting to database - return error
		if(err) {return next(err);}

		//If a user with an email does exist, return an error
		if(existingUser) {
			return res.status(422).send({error: 'Email or username is in use by another user.'});
		}

		//If a user with email does NOT exist, create and save user record
		const usersecret = randtoken.generate(30);
		const user = new User({
			email,
			password,
			usersecret,
			username
		});

		/*
			Save User
		 */
		user.save((err) => {
			//used to parse the error message from mongodb.  The error object is different for different field errors (email, password, etc)
			if(err) {
				if( err.errors.password ) {
					return res.status(422).json({error: err.errors.password.message});
				} else if( err.errors.email ) {
					return res.status(422).json({error: err.errors.email.message});
				} else {
					return res.status(422).json({error: err});
				}
			}


			/*
				Send user confirmation email
			 */
			//URL encode email address in case of special chars
			var uriEmail = encodeURIComponent(email);
			var emailer = new Email( 'rmhaas2211@gmail.com', email, 'Natural Healing Reviews Verification', VerifyEmailBody( `${config.BASE_URL_CLIENT}/verify/${usersecret}/${uriEmail}` ) );
			emailer.send_html_email();

			//Respond to request indicating the user was created with a user token.  
			//res.json({token: generateToken(user)});
			res.status(200).json({success: true, client: config.BASE_URL_CLIENT});
		});
	});
};


exports.signin = function(req, res, next) {
	

	//user has already had their email and password auth'd - just need a token
	if( req.user ) {
		res.send({token: generateToken(req.user), userID: req.user._id});
	} else {
		// res.send({error: 'Check your email or password.'})
	}
}


exports.verify = function(req, res, next) {
	//get parameters from URL
	const { secret, email } = req.params;

	//make sure correct data is sent in URL.  validation. 
	if( !secret || !email || !validator.isEmail( email ) || !validator.isAlphanumeric(secret) ) {
		return res.status(422).send({error: 'Rejected request'});
	}


	User.findOneAndUpdate({$and: [{email}, {usersecret: secret}, {is_verified: false}]},{$set:{is_verified:true}},(err, user) => {
		//if error connecting to database - return error
		if(err) {return next(err);}

		if(!user) {
			return res.status(422).send({error: 'Rejected request'});
		}

		
		return res.status(200).json({success: true});

	});
};



