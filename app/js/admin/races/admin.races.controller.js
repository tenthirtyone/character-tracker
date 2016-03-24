(function() {
  'use strict';
  
  angular.module('GNAdmin.races')
  .controller('RacesController', RacesController);
  
  RacesController.$inject = ['RacesService', 'EffectsService'];
  
  function RacesController(RacesService, EffectsService) {
    var vm = this;
    var currentRace = {};

    vm.addEffect = addEffect;
    vm.addRace = addRace;
    vm.newEffect = {};
    vm.deleteRace = deleteRace;
    vm.updateRace = updateRace;
    vm.setRace = setRace;
    vm.races = []
    vm.newRace = []; 
    
    init();
    
    function init() {
      $.material.init();
      getEffect().then(function() {
        //logging
      })

      getRace().then(function() {
        //logging
      })

      getRaces().then(function() {
        //logging
      });
    }

    function addEffect(effect) {

      for (var i=0; i < vm.newRace[0].effects.length; i++) {
        if (effect._id === vm.newRace[0].effects[i]._id) {
          return 
        }
      }
      EffectsService.addEffect(effect)
        .then(function(res) {
          currentRace.effects.push(effect);
          getEffect();
        })
    }

    function getEffect() {
      return EffectsService.getEffect()
        .then(function(res) {
        vm.newEffect = res
      })
    }

    function getRace() {
      return RacesService.getRace()
        .then(function(res) {
        vm.newRace = [];  
        vm.newRace.push(res);
      })
    }

    function getRaces() {
      return RacesService.getRaces()
        .then(function(res) {
        vm.races = res
      })
    }
    
    function setRace(race) {
      console.log(race);
      currentRace = race;
    }

    function addRace(race) {
      return RacesService.addRace(race)
      .then(function(res) {
        init();
      })
    }
    
    function deleteRace(raceid) {
      return RacesService.deleteRace(raceid)
      .then(function(res) {
        init();
      })
    }
    
    function updateRace(race) {
      return RacesService.updateRace(race)
      .then(function(res) {
        init();
      })
    }
    
  }
}());