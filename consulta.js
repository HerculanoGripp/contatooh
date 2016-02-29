var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// ObjectID de algum contato existente
var _idProcurado = new ObjectID('55ff4880c7b73fbb70f27893');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
	function(erro, db){
		if(erro) throw erro;

		db.collection('contatos').findOne({"_id": _idProcurado},
			function(erro, contato){
				if(erro) throw erro;

				console.log(contato);

			});
	});