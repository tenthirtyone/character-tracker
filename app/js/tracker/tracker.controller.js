(function() {
  'use strict';
  
  angular.module('character-tracker.tracker')
  .controller('TrackerController', TrackerController);
  
  TrackerController.$inject = ['TrackerService'];
  
  function TrackerController(TrackerService) {
    var vm = this;
    
    init();
    
    function init() {
      $.material.init();
    }
    
  }
}());