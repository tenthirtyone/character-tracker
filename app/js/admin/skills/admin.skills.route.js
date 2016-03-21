(function() {
  'use strict';
  angular
    .module('GNAdmin.skills')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'admin.skills',
        config: {
          url: '/Skills',
          templateUrl: 'views/admin.skills.template.html',
          controller: 'SkillsController',
          controllerAs: 'skills'
        }
      }
    ];
  }
}());