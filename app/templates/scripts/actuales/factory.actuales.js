
  angular
    .module('app')
    .factory('actualesFactory', actualesFactory);

  actualesFactory.$inject = ['$q', '$http'];
  function actualesFactory($q, $http) {
    
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
          deferred.resolve(response.data);
        })
        .catch(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
  }


   
    return factory;

  }

