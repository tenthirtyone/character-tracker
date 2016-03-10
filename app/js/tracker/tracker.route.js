(function() {
  'use strict';
  angular
    .module('character-tracker.tracker')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'tracker',
        config: {
          url: '/tracker',
          controller: 'TrackerController',
          controllerAs: "character",
          templateUrl: 'views/tracker.template.html'
        }
      }
    ];
  }
}());