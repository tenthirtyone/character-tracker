(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('NavbarController', NavbarController);
  
  function NavbarController() {
    var vm = this;
    
    init();
    
    function init() {
      $.material.init();
    }
    
    return vm;
  }
}());