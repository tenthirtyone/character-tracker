(function() {
  'use strict';
  
  angular.module('GNAdmin.skills')
  .controller('SkillsController', SkillsController);
  
  SkillsController.$inject = ['SkillsService'];
  
  function SkillsController(SkillsService) {
    var vm = this;
    vm.addSkill = addSkill;
    vm.deleteSkill = deleteSkill;
    vm.updateSkill = updateSkill;
    vm.skills = []
    vm.newSkill = [
      {
        name: 'New Name',
        ability: 'STR'
      }
    ];    
    
    init();
    
    function init() {
      $.material.init();
      
      return getSkills().then(function() {
        //logging
      });
    }
    
    function getSkills() {
      return SkillsService.getSkills()
        .then(function(res) {
        vm.skills = res
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