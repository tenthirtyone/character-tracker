(function() {
  'use strict';
  
  angular.module('GNAdmin.skills')
  .controller('SkillsController', SkillsController);
  
  SkillsController.$inject = ['SkillsService', 'AbilityScoresService'];
  
  function SkillsController(SkillsService, AbilityScoresService) {
    var vm = this;
    vm.addSkill = addSkill;
    vm.deleteSkill = deleteSkill;
    vm.updateSkill = updateSkill;
    vm.skills = [];
    vm.abilityscoresabbr = [];
    vm.newSkill = [
      {
        name: 'New Name',
        ability: 'STR'
      }
    ];    
    
    init();
    
    function init() {
      $.material.init();
      
      getSkills().then(function() {
        //logging
      });

      getAbilityScoresAbbr().then(function() {
        //logging
      })
    }
    
    function getSkills() {
      return SkillsService.getSkills()
        .then(function(res) {
        vm.skills = res;
      })
    }

    function getAbilityScoresAbbr() {
      return AbilityScoresService.getAbilityScoresAbbr()
        .then(function(res) {
          vm.abilityscoresabbr = res;
        })
    }
    
    function addSkill(skill) {
      console.log(skill);
      return SkillsService.addSkill(skill)
      .then(function(res) {
        console.log('getting skills');
        getSkills();
        vm.newSkill = [
          {
            name: 'New Name',
            ability: 'STR'
          }
        ];
      })
    }
    
    function deleteSkill(skillid) {
      return SkillsService.deleteSkill(skillid)
      .then(function(res) {
        getSkills();
      })
    }
    
    function updateSkill(skill) {
      
      return SkillsService.updateSkill(skill)
      .then(function(res) {
        getSkills();
      })
    }
    
  }
}());