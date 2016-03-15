(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('StatsService', StatsService);
  
  StatsService.$inject = ['ClassService'];
  
  function StatsService(ClassService) {
    
    var stats = [
      {name: 'Hit Points', abbr: 'hp', value: 300, tempValue: 300},
      {name: 'Armor', abbr: 'ac', value: 10, tempValue: 10},
      {name: 'Initiative', abbr: 'init', value: 1, tempValue: 1},
      {name: 'Speed', abbr: 'spd', value: 35, tempValue: 35}
    ];
    
    return {
      getHitPoints: getHitPoints,
      getStats: getStats
    }
    
    function getStats() {
      return stats;
    }
    
    function getHitPoints() {
      //console.log(ClassService.getClassHP());
      return ClassService.getClassHP();
    }
   
  }
}());