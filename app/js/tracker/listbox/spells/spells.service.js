(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('SpellsService', SpellsService);
  
  SpellsService.$inject = ['ClassService']
  
  function SpellsService(ClassService) {
    var spells = []
    
    var casterClasses = function() {
      return ClassService.getCasterClasses();
    }
    
    return {
      getSpells: getSpells,
      getCasterClasses: getCasterClasses
    }
    
    function getCasterClasses(){
      return casterClasses();
    }
    
    function getSpells() {
      return spells;
    }
    
  }
}());