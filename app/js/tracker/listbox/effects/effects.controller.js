(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('EffectsController', EffectsController);
  
  EffectsController.$inject = ['EffectsService']
  
  function EffectsController(EffectsService) {
    var vm = this;
      
    init();
    
    vm.effects = function() {
      return EffectsService.getEffects();
    }
    
    vm.gearEffects = function() {
      return EffectsService.getGearEffects();
    }
    
    vm.racialEffects = function() {
      return EffectsService.getRacialEffects();
    }
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());