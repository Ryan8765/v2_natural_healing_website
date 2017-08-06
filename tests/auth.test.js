//can run this with npm run test-watch

const expect = require('expect');
const request = require('supertest');
const User = require('../models/user');


const {app} = require('../index');
const Condition = require('../models/Condition');

/*
	Variables to login users
 */
var token = "";

/*
	Variables used to create a new user
 */
var data = {
	email: "rmhaas2211@gmail.com", 
	password: "password",
	passwordconfirm: "password",
	username: "ryan8765",
};
var user;
var userSecret;

//remove any users from the database
User.remove({}, (err) => {});

beforeEach((done) => {
	
	return done();
});


describe('POST /signup/genUser', () => {
	it('Should create a new user', (done) => {
		request(app)
			.post('/signup/genUser')
			.send(data)
			.expect((res) => {
				expect(res.body.success).toBe(true);
				done();
			})
			.end((err, res) => {
				if(err) {
					return done(err);
				}
			});
	});

	it('Should return error while validating new user details.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should find newly created user', (done) => {
		var email    = data.email;
		var username = data.username;
		//See if a user with a given email or username exists
		User.findOne({$or: [{email}, {username}]},(err, existingUser) => {
			expect(existingUser.email).toBe('rmhaas2211@gmail.com');
			expect(err).toBe(null);
			user = existingUser;
			done();
		});
	});

});


/*
	Not COMPLETED!!!!!!!!!!!!
 */
describe('GET /verify', () => {
	var email    = data.email;
	it('Should verify user.', (done) => {
		request(app)
			.get(`/verify/${user.usersecret}/${encodeURI(user.email)}`)
			.expect((res) => {
				User.findOne( {email} ,(err, existingUser) => {
					
				});
				done();
			})
			.end((err, res) => {
				if(err) {
					return done(err);
				}
			});
	});
});



/**************************
	Have not completed any of these
***************************/
describe('POST /signin', () => {
	it('Should sign in user', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return jwt token', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - bad credentials.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});


/*
	Conditions
 */

describe('POST /conditions/:id', () => {
	it('Should create new condition.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should verify new condition.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid jwt token.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});

//delete condition
describe('DELETE /conditions/:id', () => {
	it('Should delete existing condition.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - not a valid condition.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid jwt token.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});

describe('PATCH /conditions/:id', () => {
	it('Should update existing conditions.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - not a valid condition.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid jwt token.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});

describe('PUT /conditions/:id', () => {
	it('Should replace existing condition', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - not a valid condition.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid jwt token.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});


/*
	Treatments
 */

describe('POST /treatments/:id/treatment', () => {
	it('Should create new treatment.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should verify new treatment.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - not a valid treatment.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid jwt token.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});

//delete treatment
describe('DELETE /conditions/:id/treatment/:id', () => {
	it('Should delete existing condition.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - not a valid condition.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - not a valid treatment.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid jwt token.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});

describe('PATCH /conditions/:id/treatment/:id', () => {
	it('Should update existing treatment.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid jwt token.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});

describe('PATCH /conditions/:id/treatment/:id', () => {
	it('Should update replace treatment.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - invalid treatment', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - invalid condition', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid jwt token.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});


/*
	User
 */
describe('DELETE /users/:id', () => {
	it('Should delete existing user.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - not a valid existing user.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid user role.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});

describe('PATCH /users/:id', () => {
	it('Should update existing user.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid jwt token.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});



/*
	Password
 */
describe('POST /passreset/:userid', () => {
	it('Should send email to user to update password.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should update existing user password.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid user id.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});



/*
	Comment
 */
describe('POST /comment', () => {
	it('Should create a new comment.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 error - not a valid treatment.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 400 - comment is required.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});

	it('Should return 401 unauthorized - invalid user id.', (done) => {
		setTimeout(function(){ done(); }, 400);
	});
});

















// describe('POST /condition', () => {
// 	it('should create a new condition', (done) => {
// 		var text = 'Test todo text';
// 		console.log( text );

// 		request(app)
// 			.post('/condition')
// 			.send({text})
// 			.expect(400)
// 			.expect((res) => {
// 				expect(res.body.text).toBe(text);
// 			})
// 			.end((err, res) => {
// 				console.log( err );
// 				if(err) {
// 					return done(err);
// 				}


// 			});
// 	});
// });
