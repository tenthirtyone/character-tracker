(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('ClassController', ClassController);
  
  function ClassController() {
    var vm = this;
      
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());