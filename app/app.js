(function() {
  'use strict';
    
  angular.module('character-tracker', [
    'character-tracker.directives',
    'character-tracker.login',
    'character-tracker.mocks',
    'character-tracker.tracker',
    'ngStorage',
    'ui.router'    
  ]);
      
}());