(function() {
  'use strict'

  angular
  .module('myApp')
    .config(config);

    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
        .state('welcome', {
          url: '/welcome',
          auth: false,
          templateUrl: './app/welcome/welcome.html',
          controller: 'WelcomeController as vm'
        })

      $urlRouterProvider
        .otherwise('/welcome');
    }

})();
