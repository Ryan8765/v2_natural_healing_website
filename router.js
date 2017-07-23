const Authentication  = require('./controllers/authentication')
const passportService = require('./services/passport');
const passport        = require('passport');
const condition       = require('./controllers/conditions');
const treatment       = require('./controllers/treatments');

//require authorization using passport.  jwt auth and make sure we don't want a session. This will be used as a middleware.
const requireAuth = passport.authenticate('jwt', {session: false});

const requireSignin = passport.authenticate('local', {session: false});


module.exports = function(app) {
	app.get('/', requireAuth, function(req, res) {
		res.send({hi: 'there'});
	});

	/*
		Signup/login/verify new user email
	 */
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup/:accountType', Authentication.signup);
	app.post('/verify/:secret/:email', Authentication.verify);


	/*
		Conditions
	 */
	//create condition
	app.post('/condition', requireAuth, condition.create);
	//get all conditions
	app.get('/conditions', condition.getAll);
	//get all treatments for a particular condition
	app.get('/condition/:conditionID/treatments', condition.getTreatments);




	/*
		Treatments
	 */
	//create a treatment
	app.post('/treatment', requireAuth, treatment.create);
	

}