(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('SpellsController', SpellsController);
  
  function SpellsController() {
    var vm = this;
      
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());