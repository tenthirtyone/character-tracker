(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('AbilityScoresService', AbilityScoresService);
  
  AbilityScoresService.$inject = ['EffectsService']
  
  function AbilityScoresService(EffectsService) {
 
    var abilityScores = [
      {name: 'Strength', abbr: 'STR', score: 10},
      {name: 'Dexterity', abbr: 'DEX', score: 10},
      {name: 'Constitution', abbr: 'CON', score: 10},
      {name: 'Intelligence', abbr: 'INT', score: 10},
      {name: 'Wisdom', abbr: 'WIS', score: 10},
      {name: 'Charisma', abbr: 'CHA', score: 10}
    ];
    
    return {
      getAbilityScores: getAbilityScores
    }
    
    function mapEffects() {
      
    }
    
    function getAbilityScores() {
      return abilityScores;
    }
    
  }
})