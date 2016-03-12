(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('SkillsController', SkillsController);
  
  function SkillsController() {
    var vm = this;
      
    vm.skills = [
      {name: 'Acrobatics', proficient: false, ability: 'DEX'},
      {name: 'Animal Handling', proficient: false, ability: 'WIS'},
      {name: 'Arcana', proficient: false, ability: 'INT'},
      {name: 'Athletics', proficient: false, ability: 'STR'},
      {name: 'Deception', proficient: false, ability: 'CHA'},
      {name: 'History', proficient: false, ability: 'INT'},
      {name: 'Insight', proficient: false, ability: 'WIS'},
      {name: 'Intimidation', proficient: false, ability: 'CHA'},
      {name: 'Investigation', proficient: false, ability: 'INT'},
      {name: 'Medicine', proficient: false, ability: 'WIS'},
      {name: 'Nature', proficient: false, ability: 'INT'},
      {name: 'Perception', proficient: false, ability: 'WIS'},
      {name: 'Performance', proficient: false, ability: 'CHA'},
      {name: 'Pursuasion', proficient: false, ability: 'CHA'},
      {name: 'Religion', proficient: false, ability: 'INT'},
      {name: 'Sleight of Hand', proficient: false, ability: 'DEX'},
      {name: 'Stealth', proficient: false, ability: 'DEX'},
      {name: 'Survival', proficient: false, ability: 'WIS'},
    ];
    
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());