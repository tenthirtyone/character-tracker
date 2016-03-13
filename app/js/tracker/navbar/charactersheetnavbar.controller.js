(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('NavbarController', NavbarController);
  
  NavbarController.$inject = ['CharacterInfoService', 'ClassService', 'RacesService'];
  
  function NavbarController(CharacterInfoService, ClassService, RacesService) {
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
    
    init();
    
    function init() {
      $.material.init();
    }
    
    return vm;
  }
}());