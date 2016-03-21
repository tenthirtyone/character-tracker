(function() {
  'use strict';
  
  angular.module('GNAdmin.feats')
  .controller('FeatsController', FeatsController);
  
  FeatsController.$inject = ['FeatsService'];
  
  function FeatsController(FeatsService) {
    var vm = this;
    vm.addFeat = addFeat;
    vm.deleteFeat = deleteFeat;
    vm.updateFeat = updateFeat;
    vm.feats = []
    vm.newFeat = [
      {
        name: 'New Name',
        desc: 'Description'
      }
    ];    
    
    init();
    
    function init() {
      $.material.init();
      
      return getFeats().then(function() {
        //logging
      });
    }
    
    function getFeats() {
      return FeatsService.getFeats()
        .then(function(res) {
        vm.feats = res
      })
    }
    
    function addFeat(feat) {
      console.log(feat);
      return FeatsService.addFeat(feat)
      .then(function(res) {
        console.log('getting feats');
        getFeats();
        vm.newFeat = [
          {
            name: 'New Name',
            desc: 'Description'
          }
        ];
      })
    }
    
    function deleteFeat(featid) {
      return FeatsService.deleteFeat(featid)
      .then(function(res) {
        getFeats();
      })
    }
    
    function updateFeat(feat) {
      console.log(feat);
      return FeatsService.updateFeat(feat)
      .then(function(res) {
        getFeats();
      })
    }
    
  }
}());