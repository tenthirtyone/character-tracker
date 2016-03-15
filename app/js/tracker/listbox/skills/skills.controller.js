(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('SkillsController', SkillsController);
  
  SkillsController.$inject = ['SkillsService']
  
  function SkillsController(SkillsService) {
    var vm = this;
      
    vm.skills = SkillsService.getSkills();
    
    vm.getModForSkill = function(skill) {
      return SkillsService.getModForSkill(skill);
    }
    
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());