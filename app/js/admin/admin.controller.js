(function() {
  'use strict';
  
  angular.module('GNAdmin')
  .controller('AdminController', AdminController);
  
  AdminController.$inject = ['AdminService'];
  
  function AdminController(AdminService) {
    var vm = this;
    vm.credentials = {
      email: '',
      password: ''
    };
    
    init();
    
    function init() {
      $.material.init();
    }
    
  }
}());