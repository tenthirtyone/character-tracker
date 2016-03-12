(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('ListboxController', ListboxController);
  
  function ListboxController() {
    var vm = this;
    
    init();
    
    function init() {
      $.material.init();
    }
    

    vm.tabs = [
      {name: 'Inventory', tabName: 'inventory'},
      {name: 'Combat', tabName: 'combat'},
      {name: 'Saves/Checks', tabName: 'saves'},
      {name: 'Skills', tabName: 'skills'},
      {name: 'Spells', tabName: 'spells'},
      {name: 'Class/Level', tabName: 'class'},
      {name: 'Effects', tabName: 'effects'}
    ]
    
    vm.currentTab = vm.tabs[0].name;    
    
    vm.setTab = function(tabName) {
      vm.currentTab = tabName;
    }
    
    return vm;
  }
}());