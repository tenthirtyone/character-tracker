(function() {
  'use strict';
  
  angular.module('character-tracker.tracker')
  .controller('TrackerController', TrackerController);
  
  TrackerController.$inject = ['TrackerService'];
  
  function TrackerController(TrackerService) {
    var vm = this;
    
    vm.abilityScores = [
      {name: 'Stregnth', abbr: 'STR', score: 10},
      {name: 'Dexterity', abbr: 'DEX', score: 10},
      {name: 'Constitution', abbr: 'CON', score: 10},
      {name: 'Intelligence', abbr: 'INT', score: 10},
      {name: 'Wisdom', abbr: 'WIS', score: 10},
      {name: 'Charisma', abbr: 'CHA', score: 10}
    ]
    
    vm.gear = [
      {name: 'Left Earring', slot: 'ear1', equipped: {}},
      {name: 'Head', slot: 'head', equipped: {}},
      {name: 'Right Earring', slot: 'ear2', equipped: {}},
      {name: 'Shoulders', slot: 'shoulders', equipped: {}},
      {name: 'Face', slot: 'face', equipped: {}},
      {name: 'Throat', slot: 'throat', equipped: {}},
      {name: 'Cloak', slot: 'cloak', equipped: {}},      
      {name: 'Torso', slot: 'torso', equipped: {}},
      {name: 'Hands', slot: 'hands', equipped: {}},
      {name: 'Left Ring', slot: 'ring1', equipped: {}},
      {name: 'Belt', slot: 'belt', equipped: {}},
      {name: 'Right Ring', slot: 'ring2', equipped: {}},
      {name: 'Boots', slot: 'boots', equipped: {}},
      {name: 'Legs', slot: 'legs', equipped: {}},
      {name: 'Charm', slot: 'charm', equipped: {}},
      {name: 'Weapon 1', slot: 'weapon1', equipped: {}},
      {name: 'Weapon 2', slot: 'weapon2', equipped: {}},
      {name: 'Ranged Weapon', slot: 'ranged', equipped: {}}
    ];
    
    vm.inventory = [
      {name: 'Longsword +1', img: 'https://s-media-cache-ak0.pinimg.com/564x/db/5f/d8/db5fd8f1ee5a8f18b70e433f9b026595.jpg', desc: 'Longsword with a faint magic aura', slot: ['weapon1', 'weapon2'], versatile: true},
      {name: 'Tunic +1', img: 'https://s-media-cache-ak0.pinimg.com/564x/a9/e8/3e/a9e83ebb9acc1c74128e0bcf50c57a8f.jpg', desc: 'Tunic with a faint magic aura', slot: ['torso']}
    ];
    
    vm.skills = [];
    
    vm.saves = [];
    
    vm.spells = [];
    
    vm.effects = [];
        
    vm.races = [
      {name: 'Human'},
      {name: 'Dwarf'},
      {name: 'Half-Orc'},
      {name: 'Tiefling'},
      {name: 'Dragonkin'},
      {name: 'Halfling'},
      {name: 'Gnome'}
    ];
    
    vm.race = {name: 'Race'};
    
    vm.tabs = [
      {name: 'Inventory'},
      {name: 'Combat'},
      {name: 'Saves/Checks'},
      {name: 'Skills'},
      {name: 'Spells'},
      {name: 'Class/Level'},
      {name: 'Effects'}
    ]
    
    vm.currentTab = vm.tabs[0].name;
    
    vm.equipItem = function (item, slot){
      console.log(item);
      console.log(slot);
      
      for (i = 0; i < vm.gear.length; i++) {
        if (vm.gear[i].slot === slot) {
          vm.gear[i].equipped = item;
        }
      }
    }
    
    vm.setRace = function(race) {
      vm.race = race;
    }
    
    vm.setTab = function(tabName) {
      vm.currentTab = tabName;
    }
    
    init();
    
    function init() {
      $.material.init();
    }
    
  }
}());