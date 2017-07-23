/*
	Emailer class - used to send confirmation emails and any other emails within the application. 
 */

const MAILGUN_KEY    = require('../config').MAILGUN_KEY;
const MAILGUN_DOMAIN = require('../config').MAILGUN_DOMAIN;
const mailgun        = require('mailgun-js')({apiKey: MAILGUN_KEY, domain: MAILGUN_DOMAIN});



module.exports = class Email {

	/**
	 * [constructor description]
	 * @param  {[string]} fr      [from]
	 * @param  {[string]} to      [to]
	 * @param  {[string]} subject [subject]
	 * @param  {[string]} content [content for body of email]
	 * @param  {[string]} type    [html/text etc]
	 */
	constructor( fromEmail, toEmail, subject, content ) {
		this.fromEmail = fromEmail;
		this.toEmail   = toEmail;
		this.subject   = subject;
		this.content   = content;
	}



	//create an HTML email
	send_html_email () {
		var data = {
			from: this.fromEmail,
			to: this.toEmail,
			subject: this.subject,
			html: this.content
		};

		mailgun.messages().send(data, function (error, body) {
			//error handling
			if (error) {
				console.log( error );
			}

			console.log( body );
		});
	}

	//create plain text email
	send_text_email () {
		var data = {
			from: this.fromEmail,
			to: this.toEmail,
			subject: this.subject,
			text: this.content
		};

		//error handling
		if (error) {
			console.log( error );
		}

		mailgun.messages().send(data, function (error, body) {
			console.log(body);
		});
	}


	
};


// var email = new Email('rmhaas2211@gmail.com', 'rmhaas2211gmail.com', 'hello', '<h1>Testing this shit out</h1>');

// email.send_html_email();


