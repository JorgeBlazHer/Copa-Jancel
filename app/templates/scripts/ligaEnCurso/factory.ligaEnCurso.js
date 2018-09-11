
angular
.module('app')
.factory('ligaEnCursoFactory', ligaEnCursoFactory);

ligaEnCursoFactory.$inject = ['$q', '$http'];
function ligaEnCursoFactory($q, $http) {

var factory = {
  guardar: _guardar
};



function _guardar(cuerpo) {
  var deferred = $q.defer();

  var url = entorno + 'pasados';

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

