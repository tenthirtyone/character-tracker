(function() {
  'use strict';
  
  angular.module('character-tracker.charactersheet')
  .service('CharacterSheetService', CharacterSheetService);
  
  CharacterSheetService.$inject = ['$http', '$state'];
  
  function CharacterSheetService($http, $state) {
    var showStats = true;
    var showGear = true;
    var showBox = true;
    
    return {
      toggleStats: toggleStats,
      toggleGear: toggleGear,
      toggleBox: toggleBox,
      showStats: getShowStats,
      showGear: getShowGear,
      showBox: getShowBox
    }
    
    function toggleStats() {
      showStats = !showStats;
      console.log(showStats);
    }
    function toggleGear() {
      showGear = !showGear;
    }
    function toggleBox() {
      showBox = !showBox;
    }
    
    function getShowStats() {
      return showStats;
    }
    
    function getShowGear() {
      return showGear;
    }
    
    function getShowBox() {
      return showBox;
    }
    
  }
  
}());