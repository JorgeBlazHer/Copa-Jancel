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
			vm.torneos=response.torneos;
			console.log(vm.torneos);
		},function(response){
			console.log(response);
		});
	}


	recuperarPasados();

}
