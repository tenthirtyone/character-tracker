(function() {
  'use strict';
  
  angular.module('GNAdmin')
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