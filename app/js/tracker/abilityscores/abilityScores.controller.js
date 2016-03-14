(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('AbilityScoresController', AbilityScoresController);
  
  AbilityScoresController.$inject = ['AbilityScoresService']
  
  function AbilityScoresController(AbilityScoresService) {
    var vm = this;
    
    vm.abilityScores = AbilityScoresService.getAbilityScores();
    
    init();
    
    function init() {
      $.material.init();
    }
    
    vm.getTotalForStat = function(stat) {
      return AbilityScoresService.getTotalForStat(stat);
    } 
    
    vm.getModForStat = function(stat) {
      return AbilityScoresService.getModForStat(stat);
    }
        
    vm.getClassBonus = function(stat) {
      return AbilityScoresService.getClassBonus(stat);
    }
    
    vm.getRacialBonus = function(stat) {
      return AbilityScoresService.getRacialBonus(stat);
    }
    
    vm.getGearBonus = function(stat) {
      return AbilityScoresService.getGearBonus(stat);
    } 
    
    vm.getMiscBonus = function(stat) {
      return AbilityScoresService.getMiscBonus(stat);
    }
    
    vm.getSpellBonus = function(stat) {
      return AbilityScoresService.getSpellBonus(stat);
    }
    
    return vm;
  }
}());