(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('GearService', GearService);
  
  function GearService() {
 
    var gearSlots = [
      {name: 'Left Earring', slot: 'ear1', equipped: false, equippedItem: {}},
      {name: 'Head', slot: 'head', equipped: false, equippedItem: {}},
      {name: 'Right Earring', slot: 'ear2', equipped: false, equippedItem: {}},
      {name: 'Shoulders', slot: 'shoulders', equipped: false, equippedItem: {}},
      {name: 'Face', slot: 'face', equipped: false, equippedItem: {}},
      {name: 'Throat', slot: 'throat', equipped: false, equippedItem: {}},
      {name: 'Cloak', slot: 'cloak', equipped: false, equippedItem: {}},      
      {name: 'Torso', slot: 'torso', equipped: false, equippedItem: {}},
      {name: 'Hands', slot: 'hands', equipped: false, equippedItem: {}},
      {name: 'Left Ring', slot: 'ring1', equipped: false, equippedItem: {}},
      {name: 'Belt', slot: 'belt', equipped: false, equippedItem: {}},
      {name: 'Right Ring', slot: 'ring2', equipped: false, equippedItem: {}},
      {name: 'Boots', slot: 'boots', equipped: false, equippedItem: {}},
      {name: 'Legs', slot: 'legs', equipped: false, equippedItem: {}},
      {name: 'Charm', slot: 'charm', equipped: false, equippedItem: {}},
      {name: 'Weapon 1', slot: 'weapon1', equipped: false, equippedItem: {}},
      {name: 'Weapon 2', slot: 'weapon2', equipped: false, equippedItem: {}},
      {name: 'Ranged Weapon', slot: 'ranged', equipped: false, equippedItem: {}}
    ];
      
    
    return {
      getGearSlots: getGearSlots
    }
    
    function getGearSlots() {
      return gearSlots;
    }
    
  }
})