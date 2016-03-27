(function() {
  'use strict';
  
  angular.module('GNAdmin.dndclass')
  .controller('DnDClassController', DnDClassController);
  
  DnDClassController.$inject = ['AbilityScoresService', 'ArmorTypesService', 'DnDClassService', 'WeaponTypesService', 'SkillsService', 'ToolService'];
  
  function DnDClassController(AbilityScoresService, ArmorTypesService, DnDClassService, WeaponTypesService, SkillsService, ToolService) {
    var vm = this;
    var currentClass = {};

    vm.addArmorType = addArmorType;
    vm.addDnDClass = addDnDClass;
    vm.addSavingThrow = addSavingThrow;
    vm.addSkill = addSkill;
    vm.addTool = addTool;
    vm.addWeaponType = addWeaponType
    vm.deleteDnDClass = deleteDnDClass;
    vm.setDnDClass = setDnDClass;
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
      for (var i=0; i < currentClass.armor.length; i++) {
        if (armorType._id === currentClass.armor[i]._id) {
          return removeArmorType(armorType);
        }
      }
      currentClass.armor.push(armorType);
    }

    function removeArmorType(armorType) {
      for (var i=0; i < currentClass.armor.length; i++) {
        if (armorType._id === currentClass.armor[i]._id) {
          currentClass.armor.splice(i, 1);
        }
      }
      return 
    }

    function addSavingThrow(save) {
      console.log(save)
      console.log(currentClass.savingthrows)
      for (var i=0; i < currentClass.savingthrows.length; i++) {
        if (save === currentClass.savingthrows[i]) {
          return removeSavingThrow(save);
        }
      }
      currentClass.savingthrows.push(save);
    }

    function removeSavingThrow(save) {
      for (var i=0; i < currentClass.savingthrows.length; i++) {
        if (save === currentClass.savingthrows[i]) {
          currentClass.savingthrows.splice(i, 1);
        }
      }
      return 
    }

  
    function addSkill(skill) {
      for (var i=0; i < currentClass.startingskills.length; i++) {
        if (skill === currentClass.startingskills[i]) {
          return removeSkill(skill);
        }
      }
      currentClass.startingskills.push(skill);
    }

    function removeSkill(skill) {
      for (var i=0; i < currentClass.startingskills.length; i++) {
        if (skill === currentClass.startingskills[i]) {
          currentClass.startingskills.splice(i, 1);
        }
      }
      return 
    }  


    function addTool(tool) {
      for (var i=0; i < currentClass.tools.length; i++) {
        if (tool._id === currentClass.tools[i]._id) {
          return removeTool(tool);
        }
      }
      console.log('not found');
      currentClass.tools.push(tool);
    }

    function removeTool(tool) {
      for (var i=0; i < currentClass.tools.length; i++) {
        if (tool._id === currentClass.tools[i]._id) {
          currentClass.tools.splice(i, 1);
        }
      }
      return 
    }      
  
    function addWeaponType(weaponType) {
      for (var i=0; i < currentClass.weapons.length; i++) {
        if (weaponType._id === currentClass.weapons[i]._id) {
          return removeWeaponType(weaponType);
        }
      }
      currentClass.weapons.push(weaponType);
    }

    function removeWeaponType(weaponType) {
      for (var i=0; i < currentClass.weapons.length; i++) {
        if (weaponType._id === currentClass.weapons[i]._id) {
          console.log('wtf')
          currentClass.weapons.splice(i, 1);
        }
      }
      return 
    }     

    function getDnDClasses() {
      return DnDClassService.getDnDClasses()
        .then(function(res) {
        vm.dndclasses = res;
      })
    }

    function getSaves() {
      return AbilityScoresService.getAbilityScore()
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

    function setDnDClass(dndclass) {
      currentClass = dndclass;
    }
    
    function updateDnDClass(dndclass) {
      return DnDClassService.updateDnDClass(dndclass)
      .then(function(res) {
        init();
      })
    }
    
  }
}());