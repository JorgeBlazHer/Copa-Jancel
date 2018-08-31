
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

      var url = 'http://localhost:3000/pasados';

      $http({
          method: 'GET',
          cache: false,
          url: url
        })
        .then(function(response) {
          deferred.resolve(response.data);
        })
        .catch(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
  }


   
    return factory;

  }

