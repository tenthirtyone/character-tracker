(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('InventoryService', InventoryService);
  
  function InventoryService() {
    var items = [
      {name: 'Longsword +1', 
       img: 'https://s-media-cache-ak0.pinimg.com/564x/db/5f/d8/db5fd8f1ee5a8f18b70e433f9b026595.jpg', 
       desc: 'Longsword with a faint magic aura', 
       slot: ['weapon1', 'weapon2', '2h'],
       equipable: true, 
       equipped: false, 
       effects: [{abbr: 'Magic', value: 1, type: 'weapon'},
                {abbr: 'STR', value: 1}]
      },
      {name: 'Tunic +1', 
       img: 'https://s-media-cache-ak0.pinimg.com/564x/a9/e8/3e/a9e83ebb9acc1c74128e0bcf50c57a8f.jpg', 
       desc: 'Tunic with a faint magic aura', 
       slot: ['torso'],
       equipable: true, 
       equipped: false, 
       effects: [{abbr: 'AC', value: 1, type: 'gear'}]
      },
      {name: 'Belt of Giant Strength', 
       img: 'http://www.canonfire.com/wiki/images/2/2e/Belt_of_the_Champion01.jpg', 
       desc: '+1 STR', 
       slot: ['belt'], 
       equipable: true, 
       equipped: false, 
       effects: [{abbr: 'STR', value: 1, type: 'abilityscore'}]
      },
      {name: 'Potion of Healing', 
       img: 'https://s-media-cache-ak0.pinimg.com/236x/43/51/26/4351264b1d04301f59a12f6e167a9f15.jpg', 
       desc: '+1 STR', 
       slot: ['potion'], 
       equipable: false, 
       equipped: false, 
       effects: [{abbr: 'HEAL', dice: 1, sides: 10, type: 'potion'}]}
    ];
    
    return {
      equipItem: equipItem,
      getItems: getItems,
      getItemAtSlot: getItemAtSlot,
      unequipItem: unequipItem
    }
    
    function equipItem(item) {
      if (item.equipable) {
        item.equipped = true;
      }
    }
    
    function getItems() {
      return items;
    }
    
    function getItemAtSlot(slot){
      console.log(slot);
    }
    
    function unequipItem(item){
      item.equipped = false;
    }
    
  }
})