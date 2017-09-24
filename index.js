// main starting point of the server application
const express    = require('express');
const http       = require('http');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const fs         = require('fs');
const path       = require('path');
const router     = require('./router');
const mongoose   = require('mongoose');
const cors       = require('cors');
var flash        = require('connect-flash');
const config 	 = require('./config/config');


/*
	DB Setup
 */
mongoose.Promise = global.Promise;
//if on Heroku - use the MONGODB_URI global - else use config URI for local instance.
mongoose.connect(process.env.MONGODB_URI || config.MONGO_URI);


const app = express();

/*
	Application Setup
 */
//create location for morgan to write to - writes to 'access.log' file
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
//used as a logging framework
app.use(morgan('combined', {stream: accessLogStream}));
//allow cross origin access
app.use(cors());
//parses incoming requests into JSON.
app.use(bodyParser.json({type: '*/*'}));
router(app);



/*
	Server Setup
 */
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);

console.log( 'Server started on ', port );

module.exports = {app};