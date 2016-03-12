(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('SkillsController', SkillsController);
  
  function SkillsController() {
    var vm = this;
      
    init();
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());