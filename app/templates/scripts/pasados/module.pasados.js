
  angular
    .module('app.contactList', [])
    .config(config);

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    $stateProvider
      .state('app.contactList', {
        url: 'contact-list/',
        views: {
          
          /*Commons*/
          'content@app': {
            templateUrl: 'scripts/contact-list/contact-list.html',
            controller: 'ContactListCtrl as contactlistVM',
          }
          /*End Commons*/
          
        },
        data: {
          contentClass: 'has-filter',   
        }
      });
  }

