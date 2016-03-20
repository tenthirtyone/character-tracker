(function() {
  'use strict';
  
  angular.module('GNAdmin.skills')
  .controller('SkillsController', SkillsController);
  
  SkillsController.$inject = ['SkillsService'];
  
  function SkillsController(SkillsService) {
    var vm = this;
    vm.skills = []
    
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
    
  }
}());