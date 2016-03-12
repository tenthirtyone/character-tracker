(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('StatsController', StatsController);
  
  function StatsController() {
    var vm = this;
    
    vm.stats = [
      {name: 'Hit Points', abbr: 'hp', value: 300, tempValue: 300},
      {name: 'Armor', abbr: 'ac', value: 10, tempValue: 10},
      {name: 'Initiative', abbr: 'init', value: 1, tempValue: 1},
      {name: 'Speed', abbr: 'spd', value: 35, tempValue: 35}
    ];
    
    init();
    
    function init() {
      $.material.init();
      
    }
    
    return vm;
  }
}());