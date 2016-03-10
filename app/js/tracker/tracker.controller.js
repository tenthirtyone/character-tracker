(function() {
  'use strict';
  
  angular.module('character-tracker.tracker')
  .controller('TrackerController', TrackerController);
  
  TrackerController.$inject = ['TrackerService'];
  
  function TrackerController(TrackerService) {
    var vm = this;
    
    vm.abilityScores = [
      {name: 'Stregnth', abbr: 'STR', score: 2},
      {name: 'Dexterity', abbr: 'DEX', score: 0},
      {name: 'Constitution', abbr: 'CON', score: 0},
      {name: 'Intelligence', abbr: 'INT', score: 0},
      {name: 'Wisdom', abbr: 'WIS', score: 0},
      {name: 'Charisma', abbr: 'CHA', score: 0}
    ]
    
    init();
    
    function init() {
      $.material.init();
    }
    
  }
}());