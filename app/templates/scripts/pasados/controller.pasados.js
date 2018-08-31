angular
.module('app')
.controller('torneosPasados', torneosPasados);

torneosPasados.$inject = ['pasadosFactory'];
function torneosPasados(pasadosFactory) {
	var vm = this;

	console.log("TORNEOS PASADOS");


	function recuperarPasados(){
		pasadosFactory.getPasados()
		.then(function(response){
			console.log(response);
		},function(response){
			console.log(response);
		});
	}


	recuperarPasados();

}
