
angular
  .module('app')
  .factory('actualesFactory', actualesFactory);

actualesFactory.$inject = ['$q', '$http'];
function actualesFactory($q, $http) {

  var factory = {
    getPasados: _getPasados, 
    guardar: _guardar
  };



  function _getPasados() {
    var deferred = $q.defer();

    var url = entorno + 'enCurso';

    $http({
      method: 'GET',
      cache: false,
      url: url
    })
      .then(function (response) {
        deferred.resolve(response.data);
      })
      .catch(function (error) {
        deferred.reject(error);
      });

    return deferred.promise;
  }

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

