(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('EffectsController', EffectsController);
  
  EffectsController.$inject = ['EffectsService', 'RacesService', 'GearService']
  
  function EffectsController(EffectsService, RacesService, GearService) {
    var vm = this;
      
    init();
    
    vm.effects = function() {
      return EffectsService.getEffects();
    }
    
    vm.gearEffects = function() {
      console.log(GearService.getEffects())
      return GearService.getGearSlots();
    }
    
    vm.racialEffects = function() {
      return RacesService.getEffects();
    }
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());