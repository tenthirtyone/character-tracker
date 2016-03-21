(function() {
  'use strict';
  
  angular.module('GNAdmin.weapontypes')
  .controller('WeaponTypesController', WeaponTypesController);
  
  WeaponTypesController.$inject = ['WeaponTypesService'];
  
  function WeaponTypesController(WeaponTypesService) {
    var vm = this;
    vm.addWeaponType = addWeaponType;
    vm.deleteWeaponType = deleteWeaponType;
    vm.updateWeaponType = updateWeaponType;
    vm.weapontypes = []
    vm.newWeaponType = [
      {
        name: 'New Name'
      }
    ];    
    
    init();
    
    function init() {
      $.material.init();
      
      return getWeaponTypes().then(function() {
        //logging
      });
    }
    
    function getWeaponTypes() {
      return WeaponTypesService.getWeaponTypes()
        .then(function(res) {
        vm.weapontypes = res
      })
    }
    
    function addWeaponType(weapontype) {
      console.log(weapontype);
      return WeaponTypesService.addWeaponType(weapontype)
      .then(function(res) {
        console.log('getting weapontypes');
        getWeaponTypes();
        vm.newWeaponType = [
          {
            name: 'New Name'
          }
        ];
      })
    }
    
    function deleteWeaponType(weapontypeid) {
      return WeaponTypesService.deleteWeaponType(weapontypeid)
      .then(function(res) {
        getWeaponTypes();
      })
    }
    
    function updateWeaponType(weapontype) {
      
      return WeaponTypesService.updateWeaponType(weapontype)
      .then(function(res) {
        getWeaponTypes();
      })
    }
    
  }
}());