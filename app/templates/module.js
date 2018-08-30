

  console.log("INICIO");

  var app = angular.module('app', [
    'ngRoute'
    ]);

  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/scripts/home/home.html"
    })
});

 
