(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('CharacterSheetController', CharacterSheetController);
  
  CharacterSheetController.$inject = ['CharacterSheetService'];
  
  function CharacterSheetController(CharacterSheetService) {
    var vm = this;
    
    init();
    
    vm.showStats = function() {
      return CharacterSheetService.showStats();
    }
    
    vm.showGear = function() {
      return CharacterSheetService.showGear();
    }
    
    vm.showBox = function() {
      return CharacterSheetService.showBox();
    }
    
    function init() {
      $.material.init();
      
    }
    
  }
}());