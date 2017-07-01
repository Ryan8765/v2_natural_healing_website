const passport      = require('passport');
const User          = require('../models/user');
const config        = require('../config');
const JwtStrategy   = require('passport-jwt').Strategy;
const ExtractJwt    = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');


/*
	create local strategy - this is a passport strategy for using username and email to login.
 */
const localOptions = {
	usernameField: 'email'
};
const localLogin = new LocalStrategy( localOptions, function(email, password, done) {
	User.findOne({email}, function(err, user) {
		//if error connecting to the database, return with an error. 
		if(err) {return done(err);}

		//if no user found in database with matching email - return false without an error
		if(!user) {return done(null, false);}

		//compare passwords
		user.comparePassword(password, function(err, isMatch) {
			if(err) {return done(err);}
			if(!isMatch) {return done(null, false);}

			return done(null, user);
		});
	});
});

/*
	setup options for jwt strategy -
 */
const jwtOptions = {
	//tell jwt library where to look for hte token in the request - look for header "authorization" to find the token.
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};


//create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	// See if the user ID in the payload exists in our database
	// IF it does, call 'done' with that user 
	// otherwise, call done without user object
	
	User.findById(payload.id, function(err, user) {
		if(err) {return done(err, false);}
		const jwtUsersecret = payload.usersecret;

		if( user && jwtUsersecret === user.usersecret ) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
});


//Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);