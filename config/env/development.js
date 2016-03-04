// contatooh/config/env/test.js

module.exports = {
	env: 					'development',
	db: 					'mongodb://localhost/contatooh',
	sauceTestName: 			'contatooh E2E Testing',
	clientID: 				process.env.CLIENT_ID,
	clientSecret: 			process.env.CLIENT_SECRET,
	seleniumUser: 			process.env.SELENIUM_USER,
	seleniumUserPassword: 	process.env.SELENIUM_USER_PASSWORD
};