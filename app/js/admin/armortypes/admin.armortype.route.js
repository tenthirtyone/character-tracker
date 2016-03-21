(function() {
  'use strict';
  angular
    .module('GNAdmin.armortypes')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'admin.armortypes',
        config: {
          url: '/ArmorTypes',
          templateUrl: 'views/admin.armortype.template.html',
          controller: 'ArmorTypesController',
          controllerAs: 'armortypes'
        }
      }
    ];
  }
}());