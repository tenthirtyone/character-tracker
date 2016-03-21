(function() {
  'use strict';
  angular
    .module('GNAdmin.abilityscores')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'admin.abilityscores',
        config: {
          url: '/AbilityScores',
          templateUrl: 'views/admin.abilityscores.template.html',
          controller: 'AbilityScoresController',
          controllerAs: 'abilityscores'
        }
      }
    ];
  }
}());