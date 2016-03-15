(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('AbilityScoresService', AbilityScoresService);
  
  AbilityScoresService.$inject = ['RacesService', 'GearService', 'EffectsService', 'ClassService']
  
  function AbilityScoresService(RacesService, GearService, EffectsService, ClassService) {
 
    var abilityScores = [
      {name: 'Strength', abbr: 'STR', score: 10},
      {name: 'Dexterity', abbr: 'DEX', score: 10},
      {name: 'Constitution', abbr: 'CON', score: 10},
      {name: 'Intelligence', abbr: 'INT', score: 10},
      {name: 'Wisdom', abbr: 'WIS', score: 10},
      {name: 'Charisma', abbr: 'CHA', score: 10}
    ];
    
    return {
      getAbilityScores: getAbilityScores,
      getClassBonus: getClassBonus,
      getRacialBonus: getRacialBonus,
      getGearBonus: getGearBonus,
      getMiscBonus: getMiscBonus,
      getSpellBonus: getSpellBonus,
      getTotalForStat: getTotalForStat,
      getModForStat: getModForStat
    }
    
    function getTotalForStat(stat) {
      for (var key in abilityScores) {
       if (abilityScores[key].abbr === stat) {
        return abilityScores[key].score + ClassService.getBonusForStat(stat) + RacesService.getBonusForStat(stat) + GearService.getBonusForStat(stat) + EffectsService.getMiscBonusForStat(stat) + EffectsService.getSpellBonusForStat(stat);
       }  
      }
      return 0;
    } 
       
    function getModForStat(stat) {
      return Math.floor(getTotalForStat(stat)/2 - 5);
    }
    
    function getClassBonus(stat) {
      return ClassService.getBonusForStat(stat);
    }
    
    function getRacialBonus(stat) {
      return RacesService.getBonusForStat(stat);
    }
    
    function getGearBonus(stat) {
      return GearService.getBonusForStat(stat);
    } 
    
    function getMiscBonus(stat) {
      return EffectsService.getMiscBonusForStat(stat);
    }
    
    function getSpellBonus(stat) {
      return EffectsService.getSpellBonusForStat(stat);
    }
    
    function getAbilityScores() {
      return abilityScores;
    }
    
  }
})