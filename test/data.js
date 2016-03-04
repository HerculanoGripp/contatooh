// contatooh/test/data.js

var MongoClient = require('mongodb').MongoClient;

var contatos = [
	{nome: "Contato 1", email: "contato1@email.com.br"},
	{nome: "Contato 2", email: "contato2@email.com.br"},
	{nome: "Contato 3", email: "contato3@email.com.br"},
];

MongoClient.connect('mongodb://127.0.0.1:27017/contaooh_test', 
	function(err, db){
		if(err) throw err;

		db.dropDatabase(function(err){
			if(err) return console.log(err);

			console.log('Banco apagado com sucesso');

			db.collection('contatos').insert(contatos,
				functin(err, inserted){
					if(err) return console.log(err);

					console.log('Banco de dados populado com sucesso');
					process.exit(0);
				});
		});
	}
);