(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('EffectsController', EffectsController);
  
  EffectsController.$inject = ['EffectsService', 'RacesService', 'GearService']
  
  function EffectsController(EffectsService, RacesService, GearService) {
    var vm = this;
      
    init();
    
    vm.spellEffects = function() {
      return EffectsService.getSpellEffects();
    }
    
    vm.miscEffects = function() {
      return EffectsService.getMiscEffects();
    }
    
    vm.gearEffects = function() {
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