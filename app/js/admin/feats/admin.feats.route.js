(function() {
  'use strict';
  angular
    .module('GNAdmin.feats')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'admin.feats',
        config: {
          url: '/Feats',
          templateUrl: 'views/admin.feats.template.html',
          controller: 'FeatsController',
          controllerAs: 'feats'
        }
      }
    ];
  }
}());