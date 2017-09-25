const Authentication  = require('./controllers/authentication')
const passportService = require('./services/passport');
const passport        = require('passport');
const condition       = require('./controllers/conditions');
const treatment       = require('./controllers/treatments');
const comment         = require('./controllers/comments');
const rating         = require('./controllers/ratings');


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
	app.get('/verify/:secret/:email', Authentication.verify);


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
	app.get('/treatments/:id', treatment.getTreatment);
	

	/*
		Ratings - treatments
	 */
	app.post('/rating', requireAuth, rating.create);


	/*
		Comments
	 */
	app.post('/comment', requireAuth, comment.create);
	app.patch('/comment', requireAuth, comment.updateComment);
	app.delete('/comment', requireAuth, comment.delete);
	app.post('/like', requireAuth, comment.createLike);

	


}