(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('EffectsService', EffectsService);
  
  EffectsService.$inject = ['GearService', 'RacesService']
  
  function EffectsService(GearService, RacesService) {
 
    var racialBonuses = function() {
      return RacesService.getEffects();
    }
    
    var gearBonuses = function() {
      return GearService.getEffects();
    }
    
    var spellBonuses = function() {
      
    }
    
    var miscBonuses = function() {
      
    }
    
    var classBonuses = function() {
      
    }
    
    var gearBonuses = function() {
      return GearService.getEffects();
    }
    
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
    
    var effects = [
      {source: 'Human', effects: [{abbr: 'STR', value: 1}]}
    ]
    
    return {
      getEffects: getEffects,
      getGearEffects: getGearEffects,
      getRacialEffects: getRacialEffects
    }
    
    function getGearEffects() {
      return gearBonuses();
    }
    
    function getEffects() {
      return effects;
    }
    
    function getRacialEffects() {
      return racialBonuses();
    }
    
    function getSpellEffects() {
      return spellBonuses();
    }
    
  }
})