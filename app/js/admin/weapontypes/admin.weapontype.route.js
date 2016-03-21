(function() {
  'use strict';
  angular
    .module('GNAdmin.weapontypes')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'admin.weapontypes',
        config: {
          url: '/WeaponTypes',
          templateUrl: 'views/admin.weapontype.template.html',
          controller: 'WeaponTypesController',
          controllerAs: 'weapontypes'
        }
      }
    ];
  }
}());