(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('NavbarController', NavbarController);
  
  NavbarController.$inject = ['CharacterInfoService', 'ClassService', 'RacesService', 'CharacterSheetService'];
  
  function NavbarController(CharacterInfoService, ClassService, RacesService, CharacterSheetService) {
    var vm = this;
    
    vm.characterName = function() {
      return CharacterInfoService.getCharacterName();
    }
    
    vm.characterRace = function() {
      return RacesService.getCharacterRace();
    }
    
    vm.characterClasses = function() {
      return ClassService.getCharacterClasses();
    }
    
    vm.toggleStats = function() {
      console.log('toggled');
      CharacterSheetService.toggleStats();
    }
    
    vm.toggleGear = function() {
      console.log('toggled');
      CharacterSheetService.toggleGear();
    }
    
    vm.toggleBox = function() {
      console.log('toggled');
      CharacterSheetService.toggleBox();
    }
    
    init();
    
    function init() {
      $.material.init();
    }
    
    return vm;
  }
}());