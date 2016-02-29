// public/js/controllers/ContatosController.js

angular.module('contatooh').controller('ContatosController', 
	function($scope, Contato){
		$scope.contatos = [];

		$scope.total = 0;

		$scope.filtro = '';

		$scope.mensagem = {texto: ''};

		function buscaContatos(){
			console.log('BuscaContatos');
			Contato.query(
				function(contatos){
					console.log('Contatos ', contatos);
					$scope.contatos = contatos;
					$scope.mensagem = {};
				},
				function(erro){
					console.log('Erro ', erro);
					$scope.mensagem = {
						texto: 'Não foi possível obter a lista de contatos'
					};
				}
			);
		}

		buscaContatos();

		$scope.remove = function(contato){
			Contato.delete({id: contato._id},
			buscaContatos,
			function(erro){
				console.log(erro);
				$scope.mesange = {
					texto: "Não foi possível remover o contato"
				};
			}
		);
	};
		
});