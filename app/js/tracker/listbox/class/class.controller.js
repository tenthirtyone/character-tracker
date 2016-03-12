(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('ClassController', ClassController);
  
  ClassController.$inject = ['ClassService']
  
  function ClassController(ClassService) {
    var vm = this;
      
    vm.classes = ClassService.getClasses();
    
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