angular
.module('app')
.controller('torneosActuales', torneosActuales);

torneosActuales.$inject = ['actualesFactory'];
function torneosActuales(actualesFactory) {
	var vm = this;

	console.log("TORNEOS PASADOS");


	function recuperarPasados(){
		actualesFactory.getPasados()
		.then(function(response){
			vm.torneos=response.torneos;
			console.log(vm.torneos);
		},function(response){
			console.log(response);
		});
	}


	recuperarPasados();

}
