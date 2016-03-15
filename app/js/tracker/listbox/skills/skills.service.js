(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('SkillsService', SkillsService);
  
  SkillsService.$inject = ['AbilityScoresService', 'ClassService'];
  
  function SkillsService(AbilityScoresService, ClassService) {
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
      getModForSkill: getModForSkill,
      getSkills: getSkills
    }
    
    function getModForSkill(skill) {
      var abilityMod = 0;
      var proficiency = 0;
      for (var i in skill) {
        if (skills[i].name === skill) {
           abilityMod = AbilityScoresService.getModForStat(skills[i].ability); 
          if (skills[i].proficient) {
            proficiency = ClassService.getProficiencyBonus();
          }
        }
      }
      
      //console.log(skill);
      //console.log(abilityMod);
      //console.log(proficiency);
      
     return abilityMod + proficiency;      
    }
    
    function getSkills() {
      return skills;
    }
   
  }
})