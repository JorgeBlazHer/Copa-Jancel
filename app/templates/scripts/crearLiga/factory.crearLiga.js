
angular
.module('app')
.factory('crearLigaFactory', crearLigaFactory);

crearLigaFactory.$inject = ['$q', '$http'];
function crearLigaFactory($q, $http) {

var factory = {
  nueva: _nueva
};



function _nueva(cuerpo) {
  var deferred = $q.defer();

  var url = entorno + 'enCurso';

  $http({
    method: 'POST',
    cache: false,
    url: url,
    data: cuerpo
  })
    .then(function (response) {
      deferred.resolve(response.data);
    })
    .catch(function (error) {
      deferred.reject(error);
    });

  return deferred.promise;
}



return factory;

}

