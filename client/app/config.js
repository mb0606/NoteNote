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
        .state('note', {
          url: '/note/noteId:id',
          auth: false,
          templateUrl: './app/note/show.html',
          controller: 'NoteController as vm'
        })

      $urlRouterProvider
        .otherwise('/welcome');
    }

})();
