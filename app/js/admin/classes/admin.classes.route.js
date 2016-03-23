(function() {
  'use strict';
  angular
    .module('GNAdmin.dndclass')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'admin.dndclasses',
        config: {
          url: '/Classes',
          templateUrl: 'views/admin.classes.template.html',
          controller: 'DnDClassController',
          controllerAs: 'dndclasses'
        }
      }
    ];
  }
}());