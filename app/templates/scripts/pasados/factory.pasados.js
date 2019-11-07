
  angular
    .module('app')
    .factory('pasadosFactory', pasadosFactory);

  pasadosFactory.$inject = ['$q', '$http'];
  function pasadosFactory($q, $http) {
    
    var factory = {
      getPasados: _getPasados
    };
    
    

    function _getPasados() {
      var deferred = $q.defer();

      var url = entorno+'pasados';

      $http({
          method: 'GET',
          cache: false,
          url: url
        })
        .then(function(response) {
          console.log("torneos pasados bien")
          deferred.resolve(response.data);
        })
        .catch(function(error) {
          console.log("torneos pasados mal")
          deferred.reject(error);
        });

      return deferred.promise;
  }


   
    return factory;

  }

