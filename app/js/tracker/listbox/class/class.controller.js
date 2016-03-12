(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('ClassController', ClassController);
  
  function ClassController() {
    var vm = this;
      
    vm.classes = [
      {name: 'Fighter'},
      {name: 'Cleric'},
      {name: 'Druid'},
      {name: 'Wizard'},
      {name: 'Rogue'},
      {name: 'Barbarian'},
      {name: 'Ranger'}
    ]
    
    vm.characterClasses = [
      {name: '', level: 0}
    ]
    
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());