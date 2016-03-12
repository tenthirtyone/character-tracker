(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('InventoryController', InventoryController);
  
  InventoryController.$inject = ['InventoryService'];
  
  function InventoryController(InventoryService) {
    var vm = this;
    
    vm.items = InventoryService.getItems();
    
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());