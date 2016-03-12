(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('CombatController', CombatController);
  
  function CombatController() {
    var vm = this;
      
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());