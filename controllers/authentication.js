const User      = require('../models/user');
const jwt       = require('jsonwebtoken');
const config    = require('../config');
const randtoken = require('rand-token');


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

	const email    = req.body.email;
	const password = req.body.password;

	if(!email || !password) {
		return res.status(422).send({error: 'Must provide email and password'});
	}

	//See if a user with a given email exists
	User.findOne({email: email},(err, existingUser) => {
		//if error connecting to database - return error
		if(err) {return next(err);}

		//If a user with an email does exist, return an error
		if(existingUser) {
			return res.status(422).send({error: 'Email is in use'});
		}

		//If a user with email does NOT exist, create and save user record
		const usersecret = randtoken.generate(30);
		const user = new User({
			email,
			password,
			usersecret
		});

		user.save((err) => {
			if(err) {return next(err);}
			//Respond to request indicating the user was created with a user token.  
			res.json({token: generateToken(user)});
		});
	});
};


exports.signin = function(req, res, next) {

	console.log( typeof req.user );

	//user has already had their email and password auth'd - just need a token
	if( req.user ) {
		res.send({token: generateToken(req.user)});
	} else {
		// res.send({error: 'Check your email or password.'})
	}
}