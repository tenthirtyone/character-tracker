(function() {
  'use strict';
  angular
    .module('GNAdmin')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'admin',
        config: {
          url: '/Admin',
          views: {
            '': {
              templateUrl: 'views/admin.template.html',
              controller: 'AdminController',
              controllerAs: 'admin'
            },
            'navbar@admin': {
              templateUrl: 'views/admin.navbar.template.html',
              controller: 'NavbarController',
              controllerAs: 'navbar'
            }
          }
        }
      }
    ];
  }
}());