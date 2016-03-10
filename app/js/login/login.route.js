(function() {
  'use strict';
  angular
    .module('character-tracker.login')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'login',
        config: {
          url: '/login',
          controller: 'LoginController',
          controllerAs: "login",
          templateUrl: 'views/login.template.html'
        }
      }
    ];
  }
}());