(function() {
  'use strict';
  angular
    .module('charactergenerator')
    .run(appRun);

  appRun.$inject = ['routerHelper'];

  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'generator',
        config: {
          url: '/Generator',
	      templateUrl: 'views/charactergenerator.template.html',
	      controller: 'CharacterGeneratorController',
	      controllerAs: 'character'
            }
        }
      
    ];
  }
}());