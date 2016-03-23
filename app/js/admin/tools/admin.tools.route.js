(function() {
  'use strict';
  angular
    .module('GNAdmin.tools')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'admin.tools',
        config: {
          url: '/Tools',
          templateUrl: 'views/admin.tools.template.html',
          controller: 'ToolController',
          controllerAs: 'tools'
        }
      }
    ];
  }
}());