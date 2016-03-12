(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('SavesController', SavesController);
  
  function SavesController() {
    var vm = this;
    
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());