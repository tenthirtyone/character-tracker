(function() {
  'use strict';
  
  angular.module('GNAdmin.abilityscores')
  .controller('AbilityScoresController', AbilityScoresController);
  
  AbilityScoresController.$inject = ['AbilityScoresService'];
  
  function AbilityScoresController(AbilityScoresService) {
    var vm = this;
    vm.abilityscores = [];
    vm.addAbilityScore = addAbilityScore;
    vm.deleteAbilityScore = deleteAbilityScore;
    vm.updateAbilityScore = updateAbilityScore;
    
    vm.newAbilityScore = [
      {
        name: 'New Name',
        value: 10,
        abbr: 'abbr',
        spellSave: false
      }
    ];
    
    
    init();
    
    function init() {
      $.material.init();
      
      getAbilityScores().then(function() {
        //logging
        
      });

    }
    
    function getAbilityScores() {
      return AbilityScoresService.getAbilityScores()
        .then(function(res) {
        vm.abilityscores = res
      })
    }

    function addAbilityScore(abilityscore) {
      return AbilityScoresService.addAbilityScore(abilityscore)
      .then(function(res) {
        getAbilityScores();
        vm.newAbilityScore = [
          {
            name: 'New Name',
            value: 10,
            abbr: 'abbr',
            spellSave: false
          }
        ];
      })
    }
          
    function deleteAbilityScore(abilityscoreid) {
      return AbilityScoresService.deleteAbilityScore(abilityscoreid)
      .then(function(res) {
        getAbilityScores();
      })
    }
    
    function updateAbilityScore(abilityscore) {
      return AbilityScoresService.updateAbilityScore(abilityscore)
      .then(function(res) {
        getAbilityScores();
      })
    }

    
  }
}());