angular
.module('app')
.controller('ligaPasada', ligaPasada);

ligaPasada.$inject = ['pasadosFactory','$stateParams'];
function ligaPasada(pasadosFactory,$stateParams) {
	var vm = this;

	console.log("TORNEOS PASADOS");


	function recuperarPasados(){
		pasadosFactory.getPasados()
		.then(function(response){
			vm.torneo=response.torneos[$stateParams.id];
			console.log(vm.torneos);
		},function(response){
			console.log(response);
		});
	}


	recuperarPasados();

}
