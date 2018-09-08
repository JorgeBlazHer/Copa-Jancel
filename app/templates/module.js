

console.log("INICIO");

var app = angular.module('app', [
	'ui.router'
	]);

app.run(function($state) {
    $state.go('app');
});

app.config(function($stateProvider) {
	$stateProvider		
	.state('app', {
	 	url: '/',		
		views: {		
			'layout': {templateUrl: "templates/nav_bar.html"/*,		
        				controller:*/
        				},
        	'general@app': 	{templateUrl: "templates/scripts/home/home.html"/*,		
        				controller:*/
        				}

		}		
	})
	.state('app.pasados', {
	 	url: 'pasados/',		
		views: {
			'general': 	{templateUrl: "templates/scripts/pasados/torneos.html",		
        				controller: "torneosPasados as tVM"
        				}		
					
		}		
	})
	.state('app.liga', {
	 	url: 'liga/:id',		
		views: {
			'general': 	{templateUrl: "templates/scripts/liga/liga.html",		
        				controller: "ligaPasada as lVM"
        				}		
					
		}		
	})
	.state('app.crearLiga', {
	 	url: 'crearLiga/',		
		views: {
			'general': 	{templateUrl: "templates/scripts/crearLiga/crearLiga.html",		
        				controller: "crearLiga as clVM"
        				}		
					
		}		
	})		
});

 
