(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('EffectsController', EffectsController);
  
  EffectsController.$inject = ['EffectsService']
  
  function EffectsController(EffectsService) {
    var vm = this;
      
    init();
    
    vm.effects = EffectsService.getEffects();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());