(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .controller('EffectsController', EffectsController);
  
  function EffectsController() {
    var vm = this;
      
    init();
    
    vm.effects = [
      {name: 'Belt of Giant Strength +1', img: 'http://www.canonfire.com/wiki/images/2/2e/Belt_of_the_Champion01.jpg', effects: [{abbr: 'STR', value: 1, type: 'abilityscore'}]}
    ]
    
    function init() {
      $.material.init();
    }
   
    return vm;
  }
}());