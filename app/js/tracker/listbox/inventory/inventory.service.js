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
      {name: 'Longsword', 
       img: 'https://s-media-cache-ak0.pinimg.com/564x/db/5f/d8/db5fd8f1ee5a8f18b70e433f9b026595.jpg', 
       desc: 'Longsword with a faint magic aura', 
       slot: ['weapon1', 'weapon2', '2h'],
       equipable: true, 
       equipped: false, 
       effects: false
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
    
    var armors = [
      {name: 'Padded', img: '', desc: '', slot: ['torso'], equipable: true, type: 'light', cost: 5, armor: 11, maxdex: 100, strreq: 0, weight: 8, stealthdis: true},
      {name: 'Leather', img: '', desc: '',  slot: ['torso'], equipable: true, type: 'light', cost: 10, armor: 11, maxdex: 100, strreq: 0, weight: 10, stealthdis: false},
      {name: 'Studded Leather', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'light', cost: 45, armor: 12, maxdex: 100, strreq: 0, weight: 13, stealthdis: false},
      {name: 'Hide', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'medium', cost: 10, armor: 12, maxdex: 2, strreq: 0, weight: 12, stealthdis: false},
      {name: 'Chain Shirt', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'medium', cost: 50, armor: 13, maxdex: 2, strreq: 0, weight: 20, stealthdis: false},
      {name: 'Scale Mail', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'medium', cost: 50, armor: 14, maxdex: 2, strreq: 0, weight: 45, stealthdis: true},
      {name: 'Breastplate', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'medium', cost: 400, armor: 14, maxdex: 2, strreq: 0, weight: 20, stealthdis: false},
      {name: 'Half Plate', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'medium', cost: 750, armor: 15, maxdex: 2, strreq: 0, weight: 40, stealthdis: true},
      {name: 'Ring Mail', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'heavy', cost: 30, armor: 14, maxdex: 0, strreq: 0, weight: 40, stealthdis: true},
      {name: 'Chain Mail', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'heavy', cost: 75, armor: 16, maxdex: 0, strreq: 13, weight: 55, stealthdis: true},
      {name: 'Splint', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'heavy', cost: 200, armor: 17, maxdex: 0, strreq: 15, weight: 60, stealthdis: true},
      {name: 'Plate', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'heavy', cost: 1500, armor: 18, maxdex: 0, strreq: 15, weight: 65, stealthdis: true},
      {name: 'shield', img: '', desc: '',  slot: ['torso'], equipable: true,  type: 'shield', cost: 10, armor: 2, maxdex: 0, strreq: 15, weight: 65, stealthdis: true},
    ];
    
    var weapons = [
      {name: 'Club', img: '', desc: '', slot: ['weapon1', 'weapon2'], equipable: true, type: 'simple', cost: 1, damage: 4, damagetype: 'bludgeoning', weight: 2, properties: ['light']},
      {name: 'Dagger', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 2, damage: 4, damagetype: 'piercing', weight: 1, properties: ['light', 'finesse', 'thrown']},
      {name: 'Greatclub', img: '', desc: '', slot: ['2h'], equipable: true, type: 'simple', cost: 2, damage: 8, damagetype: 'bludgeoning', weight: 10, properties: ['two-handed']},
      {name: 'Handaxe', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 5, damage: 6, damagetype: 'slashing', weight: 2, properties: ['light', 'thrown']},
      {name: 'Javelin', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 5, damage: 6, damagetype: 'piercing', weight: 2, properties: ['thrown']},
      {name: 'Light Hammer', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 2, damage: 4, damagetype: 'bludgeoning', weight: 2, properties: ['light', 'thrown']},
      {name: 'Mace', img: '', desc: '', slot: ['weapon1', 'weapon2'], equipable: true, type: 'simple', cost: 5, damage: 6, damagetype: 'bludgeoning', weight: 4, properties: []},
      {name: 'Quarterstaff', img: '', desc: '', slot: ['weapon1', 'weapon2'], equipable: true, type: 'simple', cost: 2, damage: 6, damagetype: 'bludgeoning', weight: 4, properties: ['versatile']},
      {name: 'Sickle', img: '', desc: '', slot: ['weapon1', 'weapon2'], equipable: true, type: 'simple', cost: 1, damage: 4, damagetype: 'slashing', weight: 2, properties: ['light']},
      {name: 'Spear', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 1, damage: 6, damagetype: 'piercing', weight: 3, properties: ['versatile', 'thrown']},
    ]
    
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