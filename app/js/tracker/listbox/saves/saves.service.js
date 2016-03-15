(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('SkillsService', SkillsService);
  
  SkillsService.$inject = ['AbilityScoresService']
  
  function SkillsService(AbilityScoresService) {
    
    return {
      getSkills: getSkills
    }
    
    function getSkills() {
      return skills;
    }
   
  }
})