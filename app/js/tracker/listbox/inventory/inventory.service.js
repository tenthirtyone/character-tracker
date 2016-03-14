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
      {name: 'Plate +1', 
       img: 'https://s-media-cache-ak0.pinimg.com/564x/a9/e8/3e/a9e83ebb9acc1c74128e0bcf50c57a8f.jpg', 
       desc: 'Tunic with a faint magic aura', 
       slot: ['torso'],
       equipable: true, 
       equipped: false, 
       effects: [{abbr: 'Armor AC', value: 8, type: 'gear'}, {abbr: 'Magic AC', value: 1, type: 'magic'}]
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
      {name: 'Club', img: '', desc: '', slot: ['weapon1', 'weapon2'], equipable: true, type: 'simple', cost: 1, dice: 1, damage: 4, damagetype: 'bludgeoning', weight: 2, properties: ['light'], range: 0, maxrange: 0},
      {name: 'Dagger', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 2, dice: 1, damage: 4, damagetype: 'piercing', weight: 1, properties: ['light', 'finesse', 'thrown'], range: 0, maxrange: 0},
      {name: 'Greatclub', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'simple', cost: 2, dice: 1, damage: 8, damagetype: 'bludgeoning', weight: 10, properties: ['two-handed'], range: 0, maxrange: 0},
      {name: 'Handaxe', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 5, dice: 1, damage: 6, damagetype: 'slashing', weight: 2, properties: ['light', 'thrown'], range: 20, maxrange: 60},
      {name: 'Javelin', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 5, dice: 1, damage: 6, damagetype: 'piercing', weight: 2, properties: ['thrown'], range: 30, maxrange: 120},
      {name: 'Light Hammer', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 2, dice: 1, damage: 4, damagetype: 'bludgeoning', weight: 2, properties: ['light', 'thrown'], range: 20, maxrange: 60},
      {name: 'Mace', img: '', desc: '', slot: ['weapon1', 'weapon2'], equipable: true, type: 'simple', cost: 5, dice: 1, damage: 6, damagetype: 'bludgeoning', weight: 4, properties: [], range: 0, maxrange: 0},
      {name: 'Quarterstaff', img: '', desc: '', slot: ['weapon1', 'weapon2'], equipable: true, type: 'simple', cost: 2, dice: 1, damage: 6, damagetype: 'bludgeoning', weight: 4, properties: ['versatile'], range: 0, maxrange: 0},
      {name: 'Sickle', img: '', desc: '', slot: ['weapon1', 'weapon2'], equipable: true, type: 'simple', cost: 1, dice: 1, damage: 4, damagetype: 'slashing', weight: 2, properties: ['light'], range: 0, maxrange: 0},
      {name: 'Spear', img: '', desc: '', slot: ['weapon1', 'weapon2', 'ranged'], equipable: true, type: 'simple', cost: 1, dice: 1, damage: 6, damagetype: 'piercing', weight: 3, properties: ['versatile', 'thrown'], range: 20, maxrange: 60},
      {name: 'Light Crossbow', img: '', desc: '', slot: ['ranged'], equipable: true, type: 'simple', cost: 25, dice: 1, damage: 8, damagetype: 'piercing', weight: 5, properties: ['loading'], range: 80, maxrange: 320},
      {name: 'Dart', img: '', desc: '', slot: ['ranged'], equipable: true, type: 'simple', cost: 1, dice: 1, damage: 4, damagetype: 'piercing', weight: 3, properties: ['finesse', 'thrown'], range: 20, maxrange: 60},
      {name: 'Shortbow', img: '', desc: '', slot: ['ranged'], equipable: true, type: 'simple', cost: 25, dice: 1, damage: 6, damagetype: 'piercing', weight: 2, properties: ['finesse', 'thrown'], range: 80, maxrange: 320},
      {name: 'Sling', img: '', desc: '', slot: ['ranged'], equipable: true, type: 'simple', cost: 1, dice: 1, damage: 6, damagetype: 'piercing', weight: 0, properties: ['thrown'], range: 30, maxrange: 120},
      {name: 'Battleaxe', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 10, dice: 1, damage: 8, damagetype: 'slashing', weight: 4, properties: ['versatile'], range: 0, maxrange: 0},
      {name: 'Flail', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 10, dice: 1, damage: 8, damagetype: 'bludgeoning', weight: 2, properties: [], range: 0, maxrange: 0},
      {name: 'Glaive', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 20, dice: 1, damage: 10, damagetype: 'slashing', weight: 6, properties: ['heavy', 'reach', 'two-handed'], range: 0, maxrange: 0},
      {name: 'Greataxe', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 30, dice: 1, damage: 12, damagetype: 'slashing', weight: 7, properties: ['heavy', 'two-handed'], range: 0, maxrange: 0},
      {name: 'Greatsword', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 50, dice: 2, damage: 6, damagetype: 'slashing', weight: 6, properties: ['heavy', 'two-handed'], range: 0, maxrange: 0},
      {name: 'Halberd', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 20, dice: 1, damage: 10, damagetype: 'slashing', weight: 6, properties: ['heavy', 'reach', 'two-handed'], range: 0, maxrange: 0},
      {name: 'Lance', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 50, dice: 2, damage: 6, damagetype: 'piercing', weight: 6, properties: ['reach', 'special'], range: 0, maxrange: 0},
      {name: 'Longsword', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 15, dice: 1, damage: 8, damagetype: 'slashing', weight: 3, properties: ['versatile'], range: 0, maxrange: 0},
      {name: 'Maul', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 10, dice: 2, damage: 6, damagetype: 'bludgeoning', weight: 10, properties: ['heavy', 'two-handed'], range: 0, maxrange: 0},
      {name: 'Morningstar', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 10, dice: 1, damage: 8, damagetype: 'piercing', weight: 4, properties: [], range: 0, maxrange: 0},
      {name: 'Pike', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 5, dice: 1, damage: 10, damagetype: 'piercing', weight: 18, properties: [], range: 0, maxrange: 0},
      {name: 'Rapier', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 25, dice: 1, damage: 8, damagetype: 'piercing', weight: 2, properties: ['finesse'], range: 0, maxrange: 0},
      {name: 'Scimitar', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 25, dice: 1, damage: 6, damagetype: 'slashing', weight: 3, properties: ['finesse', 'light'], range: 0, maxrange: 0},
      {name: 'Shortsword', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 10, dice: 1, damage: 6, damagetype: 'slashing', weight: 2, properties: ['finesse', 'light'], range: 0, maxrange: 0},
      {name: 'Trident', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 5, dice: 1, damage: 6, damagetype: 'piercing', weight: 2, properties: ['thrown', 'versatile'], range: 20, maxrange: 60},
      {name: 'War Pick', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 5, dice: 1, damage: 8, damagetype: 'piercing', weight: 4, properties: [], range: 0, maxrange: 0},
      {name: 'Warhammer', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 15, dice: 1, damage: 8, damagetype: 'bludgeoning', weight: 2, properties: ['versatile'], range: 0, maxrange: 0},
      {name: 'Whip', img: '', desc: '', slot: ['weapon1'], equipable: true, type: 'martial', cost: 2, dice: 1, damage: 4, damagetype: 'slashing', weight: 2, properties: ['finesse', 'reach'], range: 0, maxrange: 0},
      {name: 'Blowgun', img: '', desc: '', slot: ['ranged'], equipable: true, type: 'martial', cost: 10, dice: 1, damage: 1, damagetype: 'piercing', weight: 1, properties: ['loading'], range: 25, maxrange: 100},
      {name: 'Hand Crossbow', img: '', desc: '', slot: ['ranged'], equipable: true, type: 'martial', cost: 75, dice: 1, damage: 6, damagetype: 'piercing', weight: 3, properties: ['loading'], range: 30, maxrange: 120},
      {name: 'Heavy Crossbow', img: '', desc: '', slot: ['ranged'], equipable: true, type: 'martial', cost: 50, dice: 1, damage: 10, damagetype: 'piercing', weight: 18, properties: ['loading', 'heavy'], range: 100, maxrange: 400},
      {name: 'Longbow', img: '', desc: '', slot: ['ranged'], equipable: true, type: 'martial', cost: 50, dice: 1, damage: 8, damagetype: 'piercing', weight: 2, properties: ['heavy'], range: 150, maxrange: 600},
      {name: 'Net', img: '', desc: '', slot: ['ranged'], equipable: true, type: 'martial', cost: 1, dice: 0, damage: 0, damagetype: 'none', weight: 3, properties: ['special'], range: 5, maxrange: 15}
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