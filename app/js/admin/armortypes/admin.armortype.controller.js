(function() {
  'use strict';
  
  angular.module('GNAdmin.armortypes')
  .controller('ArmorTypesController', ArmorTypesController);
  
  ArmorTypesController.$inject = ['ArmorTypesService'];
  
  function ArmorTypesController(ArmorTypesService) {
    var vm = this;
    vm.addArmorType = addArmorType;
    vm.deleteArmorType = deleteArmorType;
    vm.updateArmorType = updateArmorType;
    vm.armortypes = []
    vm.newArmorType = [
      {
        name: 'New Name'
      }
    ];    
    
    init();
    
    function init() {
      $.material.init();
      
      return getArmorTypes().then(function() {
        //logging
      });
    }
    
    function getArmorTypes() {
      return ArmorTypesService.getArmorTypes()
        .then(function(res) {
        vm.armortypes = res
      })
    }
    
    function addArmorType(armortype) {
      console.log(armortype);
      return ArmorTypesService.addArmorType(armortype)
      .then(function(res) {
        console.log('getting armortypes');
        getArmorTypes();
        vm.newArmorType = [
          {
            name: 'New Name'
          }
        ];
      })
    }
    
    function deleteArmorType(armortypeid) {
      return ArmorTypesService.deleteArmorType(armortypeid)
      .then(function(res) {
        getArmorTypes();
      })
    }
    
    function updateArmorType(armortype) {
      
      return ArmorTypesService.updateArmorType(armortype)
      .then(function(res) {
        getArmorTypes();
      })
    }
    
  }
}());