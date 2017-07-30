/*
	Production environment configs
 */
module.exports = {
		secret: process.env.secret,
		MAILGUN_KEY: process.env.MAILGUN_KEY,
		MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN, 
		BASE_URL: process.env.BASE_URL,
		BASE_URL_CLIENT: process.env.BASE_URL_CLIENT,
		MONGO_URI: process.env.MONGO_URI
};