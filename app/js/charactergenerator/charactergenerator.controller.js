(function() {
  'use strict';
  
  angular.module('charactergenerator')
  .controller('CharacterGeneratorController', CharacterGeneratorController);
  
  CharacterGeneratorController.$inject = ['AlignmentService', 'BackgroundService', 'CharacterService', 'RaceService'];
  
  function CharacterGeneratorController(AlignmentService, BackgroundService, CharacterService, RaceService) {
    var vm = this;
    vm.alignments = [];
    vm.backgrounds = [];
    vm.races = [];
    vm.template = {};
  

    vm.setAlignment = setAlignment;
    vm.setBackground = setBackground;
    vm.setRace = setRace;

    init();
    
    function init() {
      $.material.init();
      
      getAlignments().then(function() {

      })

      getBackgrounds().then(function() {

      })

      getRaces().then(function() {

      })

      getTemplate().then(function() {
        //logging
      });
    }
    
    function getAlignments() {
      return AlignmentService.getAlignments()
        .then(function(res) {
          vm.alignments = res;
        })
    }

    function getBackgrounds() {
      return BackgroundService.getBackgrounds()
        .then(function(res) {
          vm.backgrounds = res;
        })
    }

    function getRaces() {
      return RaceService.getRaces()
        .then(function(res) {
          vm.races = res;
        })
    }

    function getTemplate() {
      return CharacterService.getCharacter()
        .then(function(res) {
        vm.template = res
      })
    }  

    function setAlignment(alignment) {
      vm.template.alignment = alignment;
    }  

    function setBackground(background) {
      vm.template.background = background;
    }  

    function setRace(race) {
      vm.template.race = race;
    }  
  }
}());