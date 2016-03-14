(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('CharacterInfoController', CharacterInfoController);
  
  CharacterInfoController.$inject = ['CharacterInfoService', 'ClassService', 'RacesService']
  
  function CharacterInfoController(CharacterInfoService, ClassService, RacesService) {
    var vm = this;
      
    vm.classes = ClassService.getClasses();
    
    vm.characterClasses = function() {
      return ClassService.getCharacterClasses();
    }
    vm.characterRace = {};
    vm.characterName = CharacterInfoService.getCharacterName();
    vm.races = RacesService.getRaces();
    
    vm.addClass = function(newClass) {
      ClassService.addClass(newClass);
    }
    
    vm.removeClass = function(oldClass) {
      ClassService.removeClass(oldClass)
    }
    
    vm.setCharacterName = function(newName) {
      CharacterInfoService.setCharacterName(newName);
    }
    
    vm.setRace = function(race) {
      vm.characterRace = race;
      RacesService.setCharacterRace(race);
    }
    
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());