(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('EffectsController', EffectsController);
  
  function EffectsController() {
    var vm = this;
      
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());