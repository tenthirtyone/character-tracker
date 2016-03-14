(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('ClassService', ClassService);
  
  function ClassService() {
 
    var characterClasses = [];
    
    var classes = [
      {name: 'Fighter'},
      {name: 'Cleric'},
      {name: 'Druid'},
      {name: 'Wizard'},
      {name: 'Rogue'},
      {name: 'Barbarian'},
      {name: 'Ranger'}
    ];
      
    return {
      addClass: addClass,
      getCharacterClasses: getCharacterClasses,
      getBonusForStat: getBonusForStat,
      getClasses: getClasses,
      removeClass: removeClass
    }
    
    function addClass(newClass) {
      var match = false;
      for (i=0; i<characterClasses.length; i++) {
        if (characterClasses[i].name === newClass.name) {
          characterClasses[i].level++;
          match = true;
        }
      }
      
      if (!match) {
        characterClasses.push({name: newClass.name, level: 1})
      }
    }
    
    function removeClass(oldClass) {
      for (i=0; i<characterClasses.length; i++) {
        if (characterClasses[i].name === oldClass.name) {
          characterClasses[i].level--;
          if (characterClasses[i].level === 0) {
            characterClasses.splice(i, i+1);
          }
        }
      }
      
    }
    
    function getCharacterClasses() {
      return characterClasses;
    }
    
    function getBonusForStat() {
      return 0;
    }
    
    function getClasses() {
      return classes;
    }
    
  }
}());