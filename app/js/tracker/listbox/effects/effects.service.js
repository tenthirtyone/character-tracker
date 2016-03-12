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
    
    var effects = [
      {source: 'Belt of Giant Strength +1', 
       type: 'abilityscore', 
       img: 'http://www.canonfire.com/wiki/images/2/2e/Belt_of_the_Champion01.jpg', 
       effects: [{
         abbr: 'STR', 
         value: 1}
       ]}
    ];
    
    return {
      getEffects: getEffects
    }
    
    function getEffects() {
      return effects;
    }
    
  }
})