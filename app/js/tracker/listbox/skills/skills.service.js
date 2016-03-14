(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('SkillsService', SkillsService);
  
  function SkillsService() {
    var skills = [
      {name: 'Acrobatics', proficient: false, ability: 'DEX', value: 0},
      {name: 'Animal Handling', proficient: false, ability: 'WIS', value: 0},
      {name: 'Arcana', proficient: false, ability: 'INT', value: 0},
      {name: 'Athletics', proficient: false, ability: 'STR', value: 0},
      {name: 'Deception', proficient: false, ability: 'CHA', value: 0},
      {name: 'History', proficient: false, ability: 'INT', value: 0},
      {name: 'Insight', proficient: false, ability: 'WIS', value: 0},
      {name: 'Intimidation', proficient: false, ability: 'CHA', value: 0},
      {name: 'Investigation', proficient: false, ability: 'INT', value: 0},
      {name: 'Medicine', proficient: false, ability: 'WIS', value: 0},
      {name: 'Nature', proficient: false, ability: 'INT', value: 0},
      {name: 'Perception', proficient: false, ability: 'WIS', value: 0},
      {name: 'Performance', proficient: false, ability: 'CHA', value: 0},
      {name: 'Pursuasion', proficient: false, ability: 'CHA', value: 0},
      {name: 'Religion', proficient: false, ability: 'INT', value: 0},
      {name: 'Sleight of Hand', proficient: false, ability: 'DEX', value: 0},
      {name: 'Stealth', proficient: false, ability: 'DEX', value: 0},
      {name: 'Survival', proficient: false, ability: 'WIS', value: 0},
    ];
    
    return {
      getSkills: getSkills
    }
    
    function getSkills() {
      return skills;
    }
   
  }
})