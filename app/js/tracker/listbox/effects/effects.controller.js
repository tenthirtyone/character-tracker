(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('EffectsController', EffectsController);
  
  EffectsController.$inject = ['EffectsService', 'GearService']
  
  function EffectsController(EffectsService, GearService) {
    var vm = this;
      
    init();
    
    vm.spellEffects = function() {
      return EffectsService.getSpellEffects();
    }
    
    vm.miscEffects = function() {
      return EffectsService.getMiscEffects();
    }
    
    vm.gearEffects = function() {
      return EffectsService.getGearEffects();
    }
    
    vm.racialEffects = function() {
      return EffectsService.getRacialEffects();
    }
    
    vm.classEffects = function() {
      
    }
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());