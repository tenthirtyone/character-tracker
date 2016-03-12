(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('CharacterSheetController', CharacterSheetController);
  
  CharacterSheetController.$inject = ['CharacterSheetService'];
  
  function CharacterSheetController(CharacterSheetService) {
    var vm = this;
    
    vm.abilityScores = [
      {name: 'Strength', abbr: 'STR', score: 10},
      {name: 'Dexterity', abbr: 'DEX', score: 10},
      {name: 'Constitution', abbr: 'CON', score: 10},
      {name: 'Intelligence', abbr: 'INT', score: 10},
      {name: 'Wisdom', abbr: 'WIS', score: 10},
      {name: 'Charisma', abbr: 'CHA', score: 10}
    ]
    
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
    
    
    vm.setRace = function(race) {
      vm.race = race;
    }
    

    
    init();
    
    function init() {
      $.material.init();
      
    }
    
  }
}());