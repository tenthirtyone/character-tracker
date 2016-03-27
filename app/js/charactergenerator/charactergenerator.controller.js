(function() {
  'use strict';
  
  angular.module('charactergenerator')
  .controller('CharacterGeneratorController', CharacterGeneratorController);
  
  CharacterGeneratorController.$inject = [
    'AlignmentService', 
    'BackgroundService', 
    'CharacterService', 
    'DnDClassService',
    'RaceService'
    ];
  
  function CharacterGeneratorController(AlignmentService, BackgroundService, CharacterService, DnDClassService, RaceService) {
    var vm = this;
    vm.alignments = [];
    vm.backgrounds = [];
    vm.classes = [];
    vm.races = [];
    vm.template = {};
  
    vm.setAlignment = setAlignment;
    vm.setBackground = setBackground;
    vm.addClass = addClass;
    vm.removeClass = removeClass;
    vm.setRace = setRace;

    init();
    
    function init() {
      $.material.init();
      
      getAlignments().then(function() {

      })

      getBackgrounds().then(function() {

      })

      getClasses().then(function() {

      })

      getRaces().then(function() {

      })

      getTemplate().then(function() {
        //logging
      })
    }
    
    function addClass(newClass) {
      var classes = vm.template.classes;
      console.log(newClass)
      console.log(classes)
      for (var i = 0; i < classes.length; i++) {
        if (newClass._id === classes[i]._id) {
          classes[i].level++;
          return;
        }
      }
      classes.push(newClass);
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

    function getClasses() {
      return DnDClassService.getDnDClasses()
        .then(function(res) {
          vm.classes = res;
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

    function removeClass(newClass) {
      var classes = vm.template.classes;
      console.log(newClass)
      console.log(classes)
      for (var i = 0; i < classes.length; i++) {
        if (newClass._id === classes[i]._id) {
          if (classes[i].level <= 1) {
            classes.splice(i, 1);
          } else {
            classes[i].level--;
          }
        }
      }
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