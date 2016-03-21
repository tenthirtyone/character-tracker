(function() {
  'use strict';
    
  angular.module('character-tracker', [
    'character-tracker.directives',
    'character-tracker.login',
    'character-tracker.charactersheet',
    'GNAdmin',
    'ngStorage',
    'ui.router'    
  ]);
      
}());