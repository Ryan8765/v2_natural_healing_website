var env = process.env.NODE_ENV || 'development';
var configOut = {};

//this allows posts to github without allowing the config file to be seen.
if( env === 'development' ) {
	var config = require('./config.json');
	configOut = config[env]; 
} else if ( env === 'test' ) {
	var config = require('./config.json');
	configOut = config[env]; 
} else if ( env === 'production' ) {
	configOut = require('./config_prod.js');
}


//hold application secrets and config
module.exports = configOut;




