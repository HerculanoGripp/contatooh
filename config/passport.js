// config/passport.js
var passport 			= require('passport');
var GitHubStrategy 		= require('passport-github').Strategy;
var config 				= require('./config')();
var mongoose 			= require('mongoose');

module.exports = function(){
	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: config.clientID,
		clientSecret: config.clientSecret,
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done){
		Usuario.findOrCreate(
			{ "login" : profile.username },
			{ "nome" : profile.username },
			function(erro, usuario){
				if(erro){
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			}
		);
	}));

	/*
		Chamado apenas uma vez e recebe o usuário do nosso banco disponibilizado pelo callback
		da estratégia de autenticação. Relizará a serialização apenas do 
		ObjectId do usuário na sessão.
	*/
	passport.serializeUser(function(usuario, done){
		done(null, usuario._id);
	});

	//Recebe o ObjectId do usuário armazenado na sessão
	//Chamado a cada requisição
	passport.deserializeUser(function(id, done){
		Usuario.findById(id).exec()
		.then(function(usuario){
			done(null, usuario);
		});
	});
};