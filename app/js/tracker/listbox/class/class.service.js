(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('ClassService', ClassService);
  
  function ClassService() {
 
   var classes = [
      {name: 'Fighter'},
      {name: 'Cleric'},
      {name: 'Druid'},
      {name: 'Wizard'},
      {name: 'Rogue'},
      {name: 'Barbarian'},
      {name: 'Ranger'}
    ]
      
    
    return {
      getClasses: getClasses
    }
    
    function getClasses() {
      return classes;
    }
    
  }
})