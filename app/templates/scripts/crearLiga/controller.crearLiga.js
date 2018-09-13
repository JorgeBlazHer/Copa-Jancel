angular
.module('app')
.controller('crearLiga', crearLiga);

crearLiga.$inject = ['$scope','crearLigaFactory'];
function crearLiga($scope,crearLigaFactory) {
	var vm = this;

	console.log("CREAR LIGA");

	vm.participantes=[{}];

	vm.anadir=function() {
		vm.participantes.push({});
	}

	vm.crear=function() {
		if($scope.nombre){
			var jornadas=crearJornadas(vm.participantes)
			var torneo={
				nombre: $scope.nombre,
				tipo: "Liga",
				partidos: jornadas,
				cerrado: false
			};
			console.log(torneo);
			crearLigaFactory.nueva(torneo)
			.then(function (response) {
				alert("bien");
			});
		}
		
	}

	vm.borrar=function(i) {
		console.log(i);
		vm.participantes.splice(i, 1);
	}

	function crearJornadas(participantes) {
		var jornadas=[[]];
		var todos=[];
		if(vm.participantes.length>1){
			for(var i=0;i<vm.participantes.length;i++){
				for(var j=i+1;j<vm.participantes.length;j++){
					todos.push(
						{local: vm.participantes[i].nombre,
						localEquipo: vm.participantes[i].equipo, 
						visitante:vm.participantes[j].nombre,
						visitanteEquipo:vm.participantes[j].equipo
					});
				}
			}
		}

		for(var i=0;i<todos.length;i++){
			var metido=false;
			for(var j=0;j<jornadas.length && !metido;j++){
				var puedo=true;
				for(var u=0;u<jornadas[j].length && !metido;u++){
					if(jornadas[j][u].local===todos[i].local || jornadas[j][u].visitante===todos[i].visitante || jornadas[j][u].local===todos[i].visitante || jornadas[j][u].visitante===todos[i].local){
						puedo=false;
					}
				}
				if(puedo){
					jornadas[j].push(todos[i]);
					metido=true;
				}
			}
			if(!metido){
				jornadas.push([todos[i]]);
			}
		}


		return jornadas;
		


	}
	

}
