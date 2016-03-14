(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('EffectsService', EffectsService);
  
  function EffectsService() {

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
    
    var effects = {type: 'spell', effects: [
      {source: 'Bull Strength', effects: [{abbr: 'STR', value: 1}]},
      {source: 'Owl\'s Wisdom', effects: [{abbr: 'WIS', value: 1}, {abbr: 'INT', value: 1}]}
      ]}
    
    return {
      getEffects: getEffects
    }
    
    function getEffects() {
      return effects;
    }
  }
})