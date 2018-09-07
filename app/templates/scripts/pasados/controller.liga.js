angular
.module('app')
.controller('ligaPasada', ligaPasada);

ligaPasada.$inject = ['pasadosFactory','$stateParams'];
function ligaPasada(pasadosFactory,$stateParams) {
	var vm = this;

	console.log("TORNEOS PASADOS");

	vm.tabla=[];
	function recuperarPasados(){
		pasadosFactory.getPasados()
		.then(function(response){
			vm.torneo=response.torneos[$stateParams.id];
			console.log(vm.torneo.partidos);
			vm.torneo.partidos.forEach(function(element) {
				var esta=false;
				vm.tabla.forEach(function(element2) {
					if(element.local===element2.nombre){
						esta=true;
					}
					
				});
				if(!esta){
					vm.tabla.push({nombre: element.local,puntos: 0,golesAfavor: 0,golesEnContra:0});
				}

				

				esta=false;
				vm.tabla.forEach(function(element2) {
					if(element.visitante===element2.nombre){
						esta=true;
					}
					
				});
				if(!esta){
					vm.tabla.push({nombre: element.visitante,puntos: 0,golesAfavor: 0,golesEnContra:0});
				}

			});
			
		},function(response){
			console.log(response);
		});
	}



	// vm.tabla=
	// 	[
	// 	{nombre: "aaaa",
	// 	puntos: 15,
	// 	golesAfavor: 12,
	// 	golesEnContra:2
	// 	}
	// 	,
	// 	{nombre: "aaaa",
	// 	puntos: 15,
	// 	golesAfavor: 12,
	// 	golesEnContra:2
	// 	}
	// 	,
	// 	{nombre: "aaaa",
	// 	puntos: 15,
	// 	golesAfavor: 12,
	// 	golesEnContra:2
	// 	}
	// 	,
	// 	{nombre: "aaaa",
	// 	puntos: 15,
	// 	golesAfavor: 12,
	// 	golesEnContra:2}
	// 	,
	// 	{nombre: "aaaa",
	// 	puntos: 15,
	// 	golesAfavor: 12,
	// 	golesEnContra:2},
	// 	{nombre: "aaaa",
	// 	puntos: 15,
	// 	golesAfavor: 12,
	// 	golesEnContra:2}
	// 	];
	
	recuperarPasados();


	

}
