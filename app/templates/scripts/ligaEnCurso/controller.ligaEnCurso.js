angular
	.module('app')
	.controller('ligaEnCurso', ligaEnCurso);

ligaEnCurso.$inject = ['actualesFactory', '$stateParams','ligaEnCursoFactory'];
function ligaEnCurso(actualesFactory, $stateParams,ligaEnCursoFactory) {
	var vm = this;
	vm.tabla = [];

	console.log("TORNEOS PASADOS");



	function buscarIndex(name, tabla) {
		for (var i = 0; i < tabla.length; i++) {
			if (name === tabla[i].nombre) {
				return i;
			}
		}
		return -1;
	}

	vm.actualizarTabla = function () {
		vm.tabla = [];
		console.log(vm.torneo.partidos);
		vm.torneo.partidos.forEach(function (element) {
			element.forEach(function (element) {
				


					var esta = false;
					vm.tabla.forEach(function (element2) {
						if (element.local === element2.nombre) {
							esta = true;
						}

					});
					if (!esta) {
						vm.tabla.push({ nombre: element.local, puntos: 0, golesAfavor: 0, golesEnContra: 0 });
					}



					esta = false;
					vm.tabla.forEach(function (element2) {
						if (element.visitante === element2.nombre) {
							esta = true;
						}

					});
					if (!esta) {
						vm.tabla.push({ nombre: element.visitante, puntos: 0, golesAfavor: 0, golesEnContra: 0 });
					}

				if (element.golesVisitante && element.golesLocal) {
					var indexLocal = buscarIndex(element.local, vm.tabla);
					var indexVisitante = buscarIndex(element.visitante, vm.tabla);

					if (element.golesLocal > element.golesVisitante) {
						vm.tabla[indexLocal].puntos = vm.tabla[indexLocal].puntos + 3;
					}
					else if (element.golesLocal < element.golesVisitante) {
						vm.tabla[indexVisitante].puntos = vm.tabla[indexVisitante].puntos + 3;
					}
					else {
						vm.tabla[indexLocal].puntos = vm.tabla[indexLocal].puntos + 1;
						vm.tabla[indexVisitante].puntos = vm.tabla[indexVisitante].puntos + 1;
					}
					
					vm.tabla[indexLocal].golesAfavor = vm.tabla[indexLocal].golesAfavor + element.golesLocal;
					vm.tabla[indexLocal].golesEnContra = vm.tabla[indexLocal].golesEnContra + element.golesVisitante;

					vm.tabla[indexVisitante].golesAfavor = vm.tabla[indexVisitante].golesAfavor + element.golesVisitante;
					vm.tabla[indexVisitante].golesEnContra = vm.tabla[indexVisitante].golesEnContra + element.golesLocal;
				}
			});

		});
	}

	vm.guardar=function () {
		console.log(vm.torneo);
		
		ligaEnCursoFactory.guardar(vm.torneo)
		.then(function (response) {
			alert("guardado");

		}, function (response) {
			alert("no guardado");
		});
	};


	function recuperarPasados() {
		actualesFactory.getPasados()
			.then(function (response) {
				vm.torneo = response.torneos[$stateParams.id];
				console.log(vm.torneo.partidos);
				vm.actualizarTabla();

			}, function (response) {
				console.log(response);
			});
	}

	recuperarPasados();




}
