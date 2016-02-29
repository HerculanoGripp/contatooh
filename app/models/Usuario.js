// app/model/Usuario.js
var mongoose = require('mongoose');

//importando o plugin findOrCreate
var findOrCreate = require('mongoose-findorcreate');

module.exports = function(){
	var schema = mongoose.Schema({
		login: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		nome: {
			type: String,
			required: true
		},
		inclusao: {
			type: Date,
			default: Date.now
		}
	});

	//associando o plugin ao esquema
	schema.plugin(findOrCreate);

	return mongoose.model('Usuario', schema);
};