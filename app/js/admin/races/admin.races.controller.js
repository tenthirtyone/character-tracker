(function() {
  'use strict';
  
  angular.module('GNAdmin.races')
  .controller('RacesController', RacesController);
  
  RacesController.$inject = ['RacesService'];
  
  function RacesController(RacesService) {
    var vm = this;
    vm.addRace = addRace;
    vm.deleteRace = deleteRace;
    vm.updateRace = updateRace;
    vm.races = []
    vm.newRace = [
      {
        name: 'New Name',
        speed: 35,
        size: 'M'
      }
    ];    
    
    init();
    
    function init() {
      $.material.init();
      
      return getRaces().then(function() {
        //logging
      });
    }
    
    function getRaces() {
      return RacesService.getRaces()
        .then(function(res) {
        vm.races = res
      })
    }
    
    function addRace(race) {
      console.log(race);
      return RacesService.addRace(race)
      .then(function(res) {
        console.log('getting races');
        getRaces();
        vm.newRace = [
          {
            name: 'New Name',
            speed: 35,
            size: 'M'
          }
        ];
      })
    }
    
    function deleteRace(raceid) {
      return RacesService.deleteRace(raceid)
      .then(function(res) {
        getRaces();
      })
    }
    
    function updateRace(race) {
      
      return RacesService.updateRace(race)
      .then(function(res) {
        getRaces();
      })
    }
    
  }
}());