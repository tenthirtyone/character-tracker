(function() {
  'use strict';
  angular
    .module('GNAdmin.races')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'admin.races',
        config: {
          url: '/Races',
          templateUrl: 'views/admin.races.template.html',
          controller: 'RacesController',
          controllerAs: 'races'
        }
      }
    ];
  }
}());