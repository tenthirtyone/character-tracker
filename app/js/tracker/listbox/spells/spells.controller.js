(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('SpellsController', SpellsController);
  
  SpellsController.$inject = ['SpellsService'];
  
  function SpellsController(SpellsService) {
    var vm = this;
      
    init();
    
    function init() {
      $.material.init();
    }
   //This works because I use ng-if on the listbox views
    // If forces angular to initialize/destroy the controller on each change.
    vm.casterClasses = SpellsService.getCasterClasses();
    
    return vm;
  }
}());