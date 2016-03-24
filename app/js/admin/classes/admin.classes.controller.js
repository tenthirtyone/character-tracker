(function() {
  'use strict';
  
  angular.module('GNAdmin.dndclass')
  .controller('DnDClassController', DnDClassController);
  
  DnDClassController.$inject = ['AbilityScoresService', 'ArmorTypesService', 'DnDClassService', 'WeaponTypesService', 'SkillsService', 'ToolService'];
  
  function DnDClassController(AbilityScoresService, ArmorTypesService, DnDClassService, WeaponTypesService, SkillsService, ToolService) {
    var vm = this;
    vm.addArmorType = addArmorType;
    vm.addDnDClass = addDnDClass;
    vm.addSavingThrow = addSavingThrow;
    vm.addSkill = addSkill;
    vm.addTool = addTool;
    vm.addWeaponType = addWeaponType
    vm.deleteDnDClass = deleteDnDClass;
    vm.updateDnDClass = updateDnDClass;
    
    vm.armorTypes = [];
    vm.dndclasses = [];
    vm.newDnDClass = []; 
    vm.saves = [];  
    vm.skills = [];
    vm.tools = [];
    vm.weaponTypes = [];

    init();
    
    function init() {
      $.material.init();
      
      vm.newDnDClass = [
       {
          level: 0,
          startingskills: [],
          skillsCount: 0,
          savingthrows: [],
          tools: [],
          weapons: [],
          armor: [],
          hitdice: 8,
          name: "Test"
        }
      ]; 

      getArmorTypes().then(function() {
        //logging
      })
      getDnDClasses().then(function() {
        //logging
      });
      getSaves().then(function() {
        //logging
      })
      getSkills().then(function() {
        //logging
      })
      getTools().then(function() {
        //loggin
      })
      getWeaponTypes().then(function() {
        //logging
      })
    }
    
    function addArmorType(armorType) {
      for (var i=0; i < vm.newDnDClass[0].armor.length; i++) {
        if (armorType._id === vm.newDnDClass[0].armor[i]._id) {
          return 
        }
      }
      console.log('not found');
      vm.newDnDClass[0].armor.push(armorType);
    }

    function addSavingThrow(save) {
      for (var i=0; i < vm.newDnDClass[0].savingthrows.length; i++) {
        if (save._id === vm.newDnDClass[0].savingthrows[i]._id) {
          return 
        }
      }
      console.log('not found');
      vm.newDnDClass[0].savingthrows.push(save);
    }
  
    function addSkill(skill) {
      for (var i=0; i < vm.newDnDClass[0].startingskills.length; i++) {
        if (skill._id === vm.newDnDClass[0].startingskills[i]._id) {
          return 
        }
      }
      console.log('not found');
      vm.newDnDClass[0].startingskills.push(skill);
    }
  
    function addTool(tool) {
      for (var i=0; i < vm.newDnDClass[0].tools.length; i++) {
        if (tool._id === vm.newDnDClass[0].tools[i]._id) {
          return 
        }
      }
      console.log('not found');
      vm.newDnDClass[0].tools.push(tool);
    }
  
    function addWeaponType(weaponType) {
      for (var i=0; i < vm.newDnDClass[0].weapons.length; i++) {
        if (weaponType._id === vm.newDnDClass[0].weapons[i]._id) {
          return 
        }
      }
      console.log('not found');
      vm.newDnDClass[0].weapons.push(weaponType);
    }

    function getDnDClasses() {
      return DnDClassService.getDnDClasses()
        .then(function(res) {
        vm.dndclasses = res;
      })
    }

    function getSaves() {
      return AbilityScoresService.getAbilityScoresAbbr()
        .then(function(res) {
          vm.saves = res;
        })
    }

    function getSkills() {
      return SkillsService.getSkills()
        .then(function(res) {
          vm.skills = res;
        })
    }

    function getWeaponTypes() {
      return WeaponTypesService.getWeaponTypes()
        .then(function(res) {
          vm.weaponTypes = res;
        })
    }

    function getArmorTypes() {
      return ArmorTypesService.getArmorTypes()
        .then(function(res) {
          vm.armorTypes = res;
        })
    }
    
    function getTools() {
      return ToolService.getTools()
        .then(function(res) {
          vm.tools = res;
        })
    }
    
    function addDnDClass(dndclass) {
      return DnDClassService.addDnDClass(dndclass)
      .then(function(res) {
        console.log('getting dndclass');
        getDnDClasses();
        init();
      })
    }
    
    function deleteDnDClass(dndclassid) {
      return DnDClassService.deleteDnDClass(dndclassid)
      .then(function(res) {
        init();
      })
    }
    
    function updateDnDClass(dndclass) {
      
      return DnDClassService.updateDnDClass(dndclass)
      .then(function(res) {
        init();
      })
    }
    
  }
}());