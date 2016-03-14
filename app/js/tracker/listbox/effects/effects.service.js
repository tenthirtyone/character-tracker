(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('EffectsService', EffectsService);
  
  EffectsService.$inject = ['RacesService', 'GearService']
  
  function EffectsService(RacesService, GearService) {

    var effectTypes = [
      'abilityscore',
      'racial',
      'gear',
      'class',
      'spell',
      'misc',
      'potion',
      'weapon'
    ]
    
    var spellEffects = {type: 'spell', effects: [
      {source: 'Bull Strength', effects: [{abbr: 'STR', value: 1}]},
      {source: 'Owl\'s Wisdom', effects: [{abbr: 'WIS', value: 1}, {abbr: 'INT', value: 1}]}
      ]}
    
    var miscEffects = {type: 'misc', effects: [
      {source: 'Area/Lair Effect', effects: [{abbr: 'WIS', value: -1 }]}
    ]}
    
    return {
      getSpellBonusForStat: getSpellBonusForStat, 
      getClassEffects: getClassEffects, 
      getMiscBonusForStat: getMiscBonusForStat, 
      getGearEffects: getGearEffects,
      getRacialEffects: getRacialEffects,
      getSpellEffects: getSpellEffects,
      getMiscEffects: getMiscEffects
    }
  
    function getClassEffects() {
      return [];
    }   
    
    function getMiscBonusForStat(stat) {
      var tempVal = 0;
      if (miscEffects.effects) {
        for(var key in miscEffects.effects) {
          for (var effect in miscEffects.effects[key].effects) {
            if (miscEffects.effects[key].effects[effect].abbr === stat) {
              tempVal += miscEffects.effects[key].effects[effect].value;
            }
          }
        }
      }
      return tempVal;
    }
    
    function getRacialEffects() {
      return RacesService.getEffects();
    }
    
    function getSpellBonusForStat(stat) {
      var tempVal = 0;
      if (spellEffects.effects) {
        for(var key in spellEffects.effects) {
          for (var effect in spellEffects.effects[key].effects) {
            if (spellEffects.effects[key].effects[effect].abbr === stat) {
              tempVal += spellEffects.effects[key].effects[effect].value;
            }
          }
        }
      }
      return tempVal;
    }
    
    function getGearEffects() {
      return GearService.getGearSlots();
    }
    
    function getSpellEffects() {
      return spellEffects;
    }
    function getMiscEffects() {
      return miscEffects;
    }
  }
})