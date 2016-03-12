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
    
    return vm;
  }
}());