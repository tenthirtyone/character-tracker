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
      {name: 'Left Earring'},
      {name: 'Head'},
      {name: 'Right Earring'},
      {name: 'Shoulders'},
      {name: 'Face'},
      {name: 'Throat'},
      {name: 'Cloak'},      
      {name: 'Torso'},
      {name: 'Hands'},
      {name: 'Left Ring'},
      {name: 'Belt'},
      {name: 'Right Ring'},
      {name: 'Legs'},
      {name: 'Boots'},
      {name: 'Charm'},
      {name: 'Weapon 1'},
      {name: 'Weapon 2'},
      {name: 'Ranged Weapon'}
    ];
    
    vm.tabs = [
      {name: 'Inventory'},
      {name: 'Combat'},
      {name: 'Spells'},
      {name: 'Effects'}
    ]
    
    vm.currentTab = vm.tabs[0].name;
    
    vm.setTab = function(tabName) {
      vm.currentTab = tabName;
    }
    
    init();
    
    function init() {
      $.material.init();
    }
    
  }
}());