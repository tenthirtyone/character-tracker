(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('StatsController', StatsController);
  
  StatsController.$inject = ['StatsService']
  
  function StatsController(StatsService) {
    var vm = this;
    
    vm.stats = function() {
      //console.log(StatsService.getStats());
      return StatsService.getStats();
    }
    
    vm.hitPoints = StatsService.getHitPoints();
    
    init();
    
    function init() {
      $.material.init();
      
    }
    
    return vm;
  }
}());